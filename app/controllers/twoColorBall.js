import TwoColorBallService from "../services/twoColorBall";
import WinningPrizeService from "../services/winningPrize"
const Router = require("@koa/router");
const moment = require("moment")

const router = new Router({
  prefix: "/two",
});

router.get("/new", async (ctx, next) => {
  const year = moment().year();
  const lastCode = await TwoColorBallService.findLastByYear(year);
  let newCode = "";
  if(!lastCode) {
    newCode = year + "001";
  } else {
    newCode = ~~lastCode.code + 1;
  }
  ctx.response.status = 200;
  ctx.body = newCode;
});

router.post("/json", async (ctx, next) => {
  const result = {};
  const obj = ctx.request.body.result[0];
  let oldTwoColorBall = await TwoColorBallService.findOne({code: obj.code});
  if(!oldTwoColorBall) {
    const red = obj.red.split(",")
    let newTwoColorBall = {
      code: obj.code,
      date: obj.date.substring(0,10),
      red1: red[0],
      red2: red[1],
      red3: red[2],
      red4: red[3],
      red5: red[4],
      red6: red[5],
      blue: obj.blue,
      sales: obj.sales,
      poolmoney: obj.poolmoney,
      content: obj.content
    };
    newTwoColorBall = await TwoColorBallService.create(newTwoColorBall);
    
    const prizegrades = obj.prizegrades;
    for(let i = 0; i < prizegrades.length; i++) {
      const winningPrizeObj = prizegrades[i];
      if(!!winningPrizeObj.typenum) {
        let money = winningPrizeObj.typemoney.match(/[1-9][0-9]*/g);
        const winningPrize = {
          type: 1,
          referenceId: newTwoColorBall.id,
          level: winningPrizeObj.type,
          number: winningPrizeObj.typenum,
          money: Number(money[0]),
        }
        await WinningPrizeService.create(winningPrize);
      }
    }
    result.status = 0;
  } else {
    result.status = 0;
    result.msg = "已经存在";
  }
  ctx.response.status = 200;
  ctx.body = result;
});

module.exports = router.routes();

let list = [];
let json = require("./201302.json")
list = list.concat(json.result.reverse());
json = require("./201301.json")
list = list.concat(json.result.reverse());
json = require("./201402.json")
list = list.concat(json.result.reverse());
json = require("./201401.json")
list = list.concat(json.result.reverse());
json = require("./201502.json")
list = list.concat(json.result.reverse());
json = require("./201501.json")
list = list.concat(json.result.reverse());
json = require("./201602.json")
list = list.concat(json.result.reverse());
json = require("./201601.json")
list = list.concat(json.result.reverse());
json = require("./201702.json")
list = list.concat(json.result.reverse());
json = require("./201701.json")
list = list.concat(json.result.reverse());
json = require("./201802.json")
list = list.concat(json.result.reverse());
json = require("./201801.json")
list = list.concat(json.result.reverse());
json = require("./201902.json")
list = list.concat(json.result.reverse());
json = require("./201901.json")
list = list.concat(json.result.reverse());
json = require("./202002.json")
list = list.concat(json.result.reverse());
json = require("./202001.json")
list = list.concat(json.result.reverse());
json = require("./202101.json")
list = list.concat(json.result.reverse());

import TwoColorBall from '../app/services/twoColorBall';
import WinningPrize from '../app/services/winningPrize';


!(async () => {
  for (let index = 0; index < list.length; index++) {
    try{
    const element = list[index];
    const red = element.red.split(",")
    let t = {code: element.code,
    date: element.date.substring(0,10),
    red1: red[0],
    red2: red[1],
    red3: red[2],
    red4: red[3],
    red5: red[4],
    red6: red[5],
    blue: element.blue,
    sales: element.sales,
    poolmoney: element.poolmoney,
    content: element.content};
    const tt = await TwoColorBall.create(t);
    
    console.log(tt)
    
    const prizegrades = element.prizegrades;
    for(let i = 0; i < prizegrades.length; i++){
      const W = prizegrades[i];
      if(!!W.typenum){
        let money = W.typemoney.match(/[1-9][0-9]*/g);
        console.log(money)
        const w = {
          type: 1,
          referenceId: tt.id,
          level: W.type,
          number: W.typenum,
          money: Number(money[0]),
        }
        await WinningPrize.create(w);
      }
    }
  } catch (e){
  }
  }
})()
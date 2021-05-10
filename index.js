const json = require("./a.json")
const list = json.result.reverse()

import TwoColorBall from './app/services/twoColorBall';
import WinningPrize from './app/services/winningPrize';


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
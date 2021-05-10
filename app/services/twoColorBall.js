const Sequelize = require('sequelize');
const Op = Sequelize.Op;
import twoColorBall from "../models/twoColorBall";
import db from "./base.js";

const TwoColorBall = db.define("two_color_ball", twoColorBall, {
  tableName: "two_color_ball",
  indexes: [
        {
            unique: true,
            fields: ['code']
        }
    ]
});

// 同步表结构
TwoColorBall.sync();
// Game.sync({ force: true }); // 如果表存在 会删除表重新建表

module.exports = {
  findAll: async function () {
    return await TwoColorBall.findAll();
  },
  findById: async function (id) {
    return await TwoColorBall.findOne({
      where: { id: id },
    });
  },
  findOne: async function (where) {
    return await TwoColorBall.findOne({
      where: where,
    });
  },
  findLastByYear: async function (year){
    return await TwoColorBall.findOne({
      order: [
        ['code', 'DESC']
      ],
      where: {
        code: {
          [Op.like]:'%' + year + '%'
        }
      }
    });
  },
  create: async function (obj) {
    return await TwoColorBall.create(obj);
  },
  update: async function (where, obj) {
    return await TwoColorBall.update(obj, {
      where: where,
    });
  },
};

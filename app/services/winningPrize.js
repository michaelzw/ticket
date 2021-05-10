import winningPrize from "../models/winningPrize";
import db from "./base.js";

const WinningPrize = db.define("winning_prize", winningPrize, {
  tableName: "winning_prize",
});

// 同步表结构
WinningPrize.sync();
// Game.sync({ force: true }); // 如果表存在 会删除表重新建表

module.exports = {
  findAll: async function () {
    return await WinningPrize.findAll();
  },
  findById: async function (id) {
    return await WinningPrize.findOne({
      where: { id: id },
    });
  },
  findOne: async function (where) {
    return await WinningPrize.findOne({
      where: where,
    });
  },
  create: async function (obj) {
    return await WinningPrize.create(obj);
  },
  update: async function (where, obj) {
    return await WinningPrize.update(obj, {
      where: where,
    });
  },
};

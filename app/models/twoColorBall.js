import Sequelize from "sequelize";

module.exports = {
  id: {
    type: Sequelize.STRING(40),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  code: {
    type: Sequelize.STRING(250),
  },
  date: {
    type: Sequelize.DATE(),
  },
  red1: {
    type: Sequelize.INTEGER,
  },
  red2: {
    type: Sequelize.INTEGER,
  },
  red3: {
    type: Sequelize.INTEGER,
  },
  red4: {
    type: Sequelize.INTEGER,
  },
  red5: {
    type: Sequelize.INTEGER,
  },
  red6: {
    type: Sequelize.INTEGER,
  },
  blue: {
    type: Sequelize.INTEGER,
  },
  sales: {
    type: Sequelize.BIGINT,
  },
  poolmoney: {
    type: Sequelize.BIGINT,
  },
  content: {
    type: Sequelize.TEXT,
  }
};

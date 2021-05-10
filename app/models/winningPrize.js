import Sequelize from "sequelize";

module.exports = {
  id: {
    type: Sequelize.STRING(40),
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
  },
  type: {
    type: Sequelize.STRING(50),
  },
  referenceId: {
    type: Sequelize.STRING(50),
  },
  level: {
    type: Sequelize.INTEGER,
  },
  number: {
    type: Sequelize.INTEGER,
  },
  money: {
    type: Sequelize.BIGINT,
  }
};

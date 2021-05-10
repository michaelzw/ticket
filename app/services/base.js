import Sequelize from "sequelize";
const sequelize = new Sequelize("lottery", "kjzew", "123456", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  timezone: "+08:00",
  native: true,
  define: {
    underscored: false,
    freezeTableName: false,
    charset: "utf8",
    dialectOptions: {
      collate: "utf8_general_ci",
    },
    timestamps: true,
  },
  sync: { force: true },
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

  module.exports = sequelize;
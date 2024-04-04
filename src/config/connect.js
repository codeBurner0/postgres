import { Sequelize } from "sequelize";
import { userModel } from "../model/user.js";
let User = null;
const connection = async () => {
  const sequelize = new Sequelize("demo", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
    port: "5432",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    User = userModel(sequelize);
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, User };

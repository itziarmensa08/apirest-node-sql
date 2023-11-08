import { Sequelize } from "sequelize";

const database = process.env.MYSQL_DATABASE || '';
const username = process.env.MYSQL_USER || '';
const password = process.env.MYSQL_PASSWORD || '';
const host = process.env.MYSQL_HOST || '';

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: "mysql"
    }
);

async function dbConnectMySQL(): Promise<void> {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("MySQL connected");
    } catch (e) {
      console.log("MySQL ERROR connected", e);
    }
  };
  
export { sequelize, dbConnectMySQL };
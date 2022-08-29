import { Sequelize } from 'sequelize';
const userName = 'admin';
const password = 'a'; // update me
const hostName = 'admin';
const dbName = 'Ecommerce_2';

export const db = new Sequelize(dbName, userName, password, {
  dialect: 'mssql',
  host: hostName,
  port: 1433, // Default port
  logging: false, // disable logging; default: console.log

  dialectOptions: {
    requestTimeout: 30000, // timeout = 30 seconds
  },
});

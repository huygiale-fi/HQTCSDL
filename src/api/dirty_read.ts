import { Sequelize } from 'sequelize';
const userName = 'admin';
const password = 'a'; // update me
const hostName = 'admin';
const dbName = 'Ecommerce_2';

// Initialize Sequelize to connect to sample DB
const db = new Sequelize(dbName, userName, password, {
  dialect: 'mssql',
  host: hostName,
  port: 1433, // Default port
  logging: false, // disable logging; default: console.log

  dialectOptions: {
    requestTimeout: 30000, // timeout = 30 seconds
  },
});

db.sync().then(function () {
  console.log('\nCreated database schema from model.');
});
(async function a() {
  db.query(
    'EXEC DIRTY_READ_TRANS1 2,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    {
      raw: true,
    }
  ).then((v) => console.log(v));
  db.query('EXEC DIRTY_READ_TRANS2 2', {
    raw: true,
  }).then((v) => console.log(v));
})();

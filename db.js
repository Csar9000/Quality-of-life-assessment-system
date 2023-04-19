const Sequilize = require('sequelize')
const dbConfig = require('./config/db.config')

module.exports = new Sequilize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres',
  port:dbConfig.port,
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
    port:'5000'
  }
})



// const { Pool } = require('pg');
// var config = {
//     host: 'localhost', // server name or IP address;
//     port: 5000,
//     database: 'pbsanhk',
//     user: 'postgres',
//     password: '524645',
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000
// };
// const pool = new Pool(config);

// pool.on('error', function (err, client) {
//     console.error('idle client error', err.message, err.stack);
// });
// pool.query('select "codeUser" FROM public."public.Result";', function(err, res){
//     console.log('number111:', res.rows[0]);
// });

// pool.query('SELECT $1::int AS number', ['2'], function(err, res) {
//     if(err) {
//         return console.error('error running query', err);
//     }
//     console.log('number:', res.rows[0].number);
// });

//module.exports = pool
require('dotenv').config();
const Sequelize = require('sequelize');

const connect = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME || 'root',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.host || 'localhost',
        dialect: process.env.DB_DIALECT || 'mysql',
    },
);

async function testConnection() {
    try {
        await connect.authenticate();
        console.log('>> Connected to database');
    } catch (err) {
        console.log('>> Unable to connect to database : ', err);
    };
}

// testConnection();

const db = {};
db.Sequelize = Sequelize;
db.connect = connect;

db.biodata = require('./biodata.model.js')(db.connect, db.Sequelize);

module.exports = db;

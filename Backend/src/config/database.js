const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_uac',  
    password: 'admin',
    port: 5432,
});

module.exports = pool;

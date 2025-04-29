

require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

console.log('Database user:', process.env.DB_USER);
console.log('Database user:', process.env.DB_PASSWORD);

const testQuery = async () => {
    try {
        const res = await pool.query('SELECT * FROM customer');
        console.log('Test query result:', res.rows);
    } catch (err) {
        console.error('Error executing query:', err);
    } finally {
        pool.end();
    }
};

testQuery();
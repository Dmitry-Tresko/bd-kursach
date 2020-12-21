const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "di7696590ma",
    host: "localhost",
    port: 5432,
    database: "tour_agency"
})

module.exports = pool;
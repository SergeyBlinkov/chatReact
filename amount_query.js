
// Данные для базы данных
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'month',
    password: 'root',
    port: 5432
})
// Данные для базы данных



const getMonth = () => {
return new Promise((resolve, reject) => {
    pool.query('select month, number from amount', (error, result) => {
        if (error) { reject(error)}
        resolve(result.rows)
    })
})
}


module.exports = {
    getMonth
}
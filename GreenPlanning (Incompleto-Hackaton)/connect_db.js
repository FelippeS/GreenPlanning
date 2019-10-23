
const { Pool, Client } = require('pg')

function connect_data(){
    
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'abc123',
        port: 5432,
    })
    pool.query('SELECT * from municipios', (err, res) => {
        console.log(err, res)
        pool.end()
    })

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'abc123',
        port: 5432,
    })

    client.connect()
    client.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        client.end()
    })
}

connect_data()
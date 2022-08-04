if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}
module.exports = {
    pg: require('knex')({
        client: `${process.env.PG_CONNECTION_CLIENT}`,
        version: '10.1',
        connection: {
            host: `${process.env.PG_CONNECTION_ENTPOINT}`,
            port: `${process.env.PG_CONNECTION_PORT}`,
            user: `${process.env.PG_CONNECTION_USER}`,
            password: `${process.env.PG_CONNECTION_PASSWORD}`,
            database: `${process.env.PG_CONNECTION_DB}`
        }
    })
}

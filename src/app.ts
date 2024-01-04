import 'dotenv/config'
import express from 'express'
import { PoolConfig, createConnection } from 'mysql'

const app = express()
const PORT = process.env.PORT_APP || 3333

const config: PoolConfig = {
 host: 'db',
 user: 'root',
 password: 'root',
 database: 'nodedb'
}

const connection = createConnection(config)
connection.end()

app.get('/health', (_, res) => { res.send('Hello World!') })

app.get('/novarota', (_, res) => res.send("opa"))

app.listen(PORT, () => {
 console.log("server running on port: " + PORT)
})

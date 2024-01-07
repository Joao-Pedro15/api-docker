import 'dotenv/config'
import './config/module-alias'
import express from 'express'
import { Connection, PoolConfig, QueryFunction, createConnection } from 'mysql'
import { UserMySqlRepository } from './repositories/implementation/UserMySqlRepository'
import { promisify } from 'util'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT_APP || 3333

const config: PoolConfig = {
 host: 'db',
 user: 'root',
 password: 'root',
 database: 'nodedb'
}

const connection = createConnection(config)

app.get('/health', (_, res) => { res.send('Hello World!') })

app.get('/novarota', (_, res) => res.send("opa"))

app.get('/getAll', async (req, res) => {
 try {
  const repository = new UserMySqlRepository(connection)
  const user = await repository.find()
  connection.end()
  return res.send(user)
 } catch (error) {
  return res.send(error)
 }
})

app.listen(PORT, () => {
 console.log("server running on port: " + PORT)
})
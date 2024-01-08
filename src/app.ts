import 'dotenv/config'
import './config/module-alias'
import express from 'express'
import { makeLoadUserControllerFactory } from './controllers/user/loadAll/LoadUserControllerFactory'
import { adaptRoute } from './main/route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT_APP || 3333


app.get('/health', (_, res) => { res.send('Hello World!') })

app.get('/novarota', (_, res) => res.send("opa"))

app.get('/getAll', adaptRoute(makeLoadUserControllerFactory()))

app.listen(PORT, () => {
 console.log("server running on port: " + PORT)
})
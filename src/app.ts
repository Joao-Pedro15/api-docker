import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT_APP || 3333

app.get('/health', (_, res) => { res.send('Hello World!') })


app.listen(PORT, () => {
 console.log("server running on port: " + PORT)
})

import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import { config } from './config'

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


app.listen(config.port, () => console.log('App listening on url http://localhost:8080' + config.port))
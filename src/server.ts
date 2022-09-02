import dotenv from 'dotenv'
import app from './app'
import http from 'http'

dotenv.config()

const server = http.createServer(app)

server.listen(process.env.PORT || 5000)
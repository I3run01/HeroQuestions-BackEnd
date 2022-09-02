import dotenv from 'dotenv'
import app from './app'
import sslRedirect from 'heroku-ssl-redirect'

dotenv.config()
app.use(sslRedirect())

app.listen(process.env.PORT || 5000)
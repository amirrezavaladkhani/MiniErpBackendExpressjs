import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import errorMiddleware from './middlewares/error.middleware.js'
import routes from './routes/index.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(express.json())

app.use('/api', routes)

app.use(errorMiddleware)

export default app

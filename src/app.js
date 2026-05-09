const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// const userRoutes = require('./routes/user.routes')

// app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
   res.json({
      message: 'Mini ERP API'
   })
})

module.exports = app

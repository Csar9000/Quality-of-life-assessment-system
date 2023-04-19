const express = require('express')
const resultRouter = require('./routes/result.routes')
const loginRouter = require('./routes/login.routes')
const PORT = process.env.PORT || 8080
const Result = require('./models/result')

const app = express()
app.use(express.json())

const db = require('./db.js')
db.authenticate()
  .catch(error => console.error(error))



app.use('/api',resultRouter)
app.use('/api',loginRouter)
app.listen(PORT, ()=>console.log(`server startde on port ${PORT}`))

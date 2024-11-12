const express = require('express')
const app = express()
const dbConnection = require('./confiq/dbConnention')
const Userlist = require('./modals/userSchema')
const router = require('./route')
const port = 3000
app.use(express.json())
app.use(router)
dbConnection()



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })












const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const connection = require('./src/helper/mysql')

connection.connect( (error) => {
    if (error) throw error
    console.log('Database is Connected')
})

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world');
})
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/', require('./src/routes/index'))

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, (req, res) => {
    console.log('This aplication running in http://localhost:'+PORT)
})
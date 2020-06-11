const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
const cors = require('cors')
const xssFilter = require('x-xss-protection')
const whitelist = ['http://localhost']
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

const corsOptions = (req, callback) => {
    if (whitelist.split('').indexOf(req.header('origin')) !== -1) {
        console.log('success')
        return callback(null, {
            origin: true
        })
    } else {
        console.log('Failed')
        return callback(null, {
            origin: false
        })
    }
}

app.use(cors())
app.options('*', cors(corsOptions))
app.use(xssFilter())
app.use('/api/', require('./src/routes/index'))

const PORT = process.env.SERVER_PORT || 3000
app.listen(PORT, (req, res) => {
    console.log('This aplication running in http://localhost:'+PORT)
})
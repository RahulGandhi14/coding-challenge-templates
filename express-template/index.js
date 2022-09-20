const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/index.routes')

dotenv.config()

// connect with database
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log('app connected to db!')
)

const app = new express()

// set body parse
app.use(bodyParser.json())

// set cors
app.use(cors())

app.use('/api', router)

app.get('/hello', async (req, res) => {
    res.json({ hello: 'world' })
})

app.post('/echo', async (req, res) => {
    try {
        res.json({
            body: req.body,
        })
    } catch (e) {
        res.json({
            error: e.message,
        })
    }
})

app.listen(8080, () => {
    console.log('Listening on 8080. Ctrl+c to stop this server.')
})

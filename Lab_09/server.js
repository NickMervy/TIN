const express = require('express')
let bodyParser = require('body-parser')
let port = 22100

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

const opsRouter = require('./routes/ops')
app.use('/ops', opsRouter)

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})

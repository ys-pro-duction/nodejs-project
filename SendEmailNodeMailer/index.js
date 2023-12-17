const express = require('express')
const app = express()

const sendEmail = require('./controller/sendEmail')

app.get('/',sendEmail)

const start = async () => {
    app.listen(1234, () => {
        console.log("server listend");
    })
}
start()

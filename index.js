require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hey Hey lalala")
})
app.get('/youtube', (req, res) => {
    res.send("OIIII")
})
app.listen(process.env.PORT, () => {
    console.log(`Example port : ${port}`)
})
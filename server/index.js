const express = require('express')
const {PORT} = require('./config')

const app = express()

app.get('/ping', (req, res) => {
    res.json({ping: 'pong'})
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT} ...`))
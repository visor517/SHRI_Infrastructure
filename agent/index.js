const express = require('express')
const {port} = require('./agent-conf.json')
const fs = require('fs')
const axios = require('axios')

const app = express()

app.get('/build', (req,res) => {
    fs.writeFile("log.txt", req.query)
    res.json({ error: 0})
})

app.listen(port, () => console.log(`Agent has been started on port ${port} ...`))

// работа
const toServer = require('./actions/toServer')

toServer('/notify-agent?agentHost=localhost&port='+port)

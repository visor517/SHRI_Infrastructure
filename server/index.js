let agents = []
module.exports = agents

const express = require('express')
const {port} = require('./server-conf.json')
const regAgent = require('./actions/regAgent')

const app = express()

app.get('/notify-agent', regAgent)

app.get('/agents-list', (req,res) => {
    res.json(agents)
})

app.get('/notify-build-result', (req,res) => {
    console.log(req.query)
    res.json({error: 0})
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))
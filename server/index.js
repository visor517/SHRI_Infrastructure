const express = require('express')
const {port} = require('./server-conf.json')
const todoLog = require('./todoLog')

const app = express()

const date = new Date()
const logFile = `${__dirname}/logs/${date.getHours()}${date.getMinutes()}${date.getSeconds()}.txt`
let agents = []

app.get('/notify-agent', (req,res) => {
    const params = req.query
    if (params && params.port && params.agentHost) {
        agents.push(params)
        todoLog(logFile, `Добавлен агент: ${params.agentHost}:${params.port}`)
        res.json({ error: 0})
    }
    else {
        todoLog(logFile, `Неудачная попытка добавить агент: ${params.agentHost}:${params.port}`)
        res.json({ error: 1})
    }
    
})

app.get('/notify-build-result', (req,res) => {
    console.log(req.query)
    res.json({error: 0})
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))
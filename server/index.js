let agents = []     // список зарегистрированных агентов
let tasks = []      // список задач
let results = []    // список полученных результатов
const date = new Date()
const logFile = `/logs/${date.getHours()}${date.getMinutes()}${date.getSeconds()}.txt`  // файл для лога
module.exports.agents = agents
module.exports.tasks = tasks
module.exports.results = results
module.exports.logFile = logFile

const express = require('express')
const {port} = require('./server-conf.json')
const regAgent = require('./actions/regAgent')
const getResult = require('./actions/getResult')
const fs = require('fs')

const app = express()

app.get('/notify-agent', regAgent)
app.get('/notify-build-result', getResult)

// для себя
app.get('/agents-list', (req,res) => res.json(agents))  // проверять список агентов
app.get('/tasks-list', (req,res) => res.json(tasks))    // проверять список задач
app.get('/log', async (req,res) => {                    // выводить текущий лог
    await fs.readFile(`.${logFile}`, (err, log) => {
        res.send(`<h2>Лог ${logFile}</h2><plaintext>${log}`)
    })    
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))

// работа

const getTasks = require('./actions/getTasks')

getTasks()

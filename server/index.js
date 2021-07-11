let agents = []     // список зарегистрированных агентов
let tasks = []      // список задач
let results = []    // список полученных результатов
module.exports = agents
module.exports = tasks
module.exports = results

const express = require('express')
const {port} = require('./server-conf.json')
const regAgent = require('./actions/regAgent')
const getResult = require('./actions/getResult')

const app = express()

app.get('/notify-agent', regAgent)
app.get('/notify-build-result', getResult)

// для себя
app.get('/agents-list', (req,res) => res.json(agents))  // проверять список агентов
app.get('/tasks-list', (req,res) => res.json(tasks))    // проверять список задач

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))

// работа

const getTasks = require('./actions/getTasks')

getTasks()

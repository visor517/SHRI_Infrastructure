let agents = []     // очередь агентов
let tasks = []      // очередь задач
let works = []      // список проводимых работ [{agent:{},task:{}}]
let results = []    // очередь не отправленных результатов
let settings = {}   // repoName, buildCommand
const date = new Date()
const logFile = `/logs/${date.getHours()}${date.getMinutes()}${date.getSeconds()}.txt`  // файл для лога
module.exports.agents = agents
module.exports.tasks = tasks
module.exports.works = works
module.exports.results = results
module.exports.settings = settings
module.exports.logFile = logFile

const express = require('express')
const { port } = require('./server-conf.json')
const routeAgent = require('./actions/routeAgent')
const routeResult = require('./actions/routeResult')
const fs = require('fs')

const app = express()

app.get('/notify-agent', routeAgent)
app.get('/notify-build-result', routeResult)

// для себя
app.get('/agents-list', (req, res) => res.json(agents))  // проверять очередь агентов
app.get('/tasks-list', (req, res) => res.json(tasks))    // проверять очередь задач
app.get('/works-list', (req, res) => res.json(works))    // проверять список выданных задач
app.get('/results-list', (req, res) => res.json(results))// проверять список решенных задач
app.get('/', async (req, res) => {                       // выводить текущий лог
    await fs.readFile(`.${logFile}`, (err, log) => {
        res.send(`<a href="/agents-list">Агенты</a> | <a href="/tasks-list">Задачи</a> | <a href="/works-list">Работы</a> | <a href="/results-list">Результаты</a>
                <h2>Лог ${logFile}</h2><plaintext>${log}`)
    })
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))

// работа

const getSettings = require('./actions/getSettings')
const getTasks = require('./actions/getTasks')

getSettings()
getTasks()

//let timerId = setInterval(() => getTasks(), 50000)
// дозагрузка задач. пока нет отбраковки повторных
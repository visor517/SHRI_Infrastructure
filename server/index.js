let agents = []     // список зарегистрированных агентов
let results = []    // список полученных результатов
module.exports = agents
module.exports = results

const express = require('express')
const {port} = require('./server-conf.json')
const regAgent = require('./actions/regAgent')
const getResult = require('./actions/getResult')

const app = express()

app.get('/notify-agent', regAgent)
app.get('/notify-build-result', getResult)

app.get('/agents-list', (req,res) => {  // для себя проверять список агентов
    res.json(agents)
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))
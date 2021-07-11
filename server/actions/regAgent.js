const todoLog = require("./todoLog")
const agents = require('../index')

module.exports = (req,res) => {
    const params = req.query
    if (params && params.port && params.agentHost) {
        agents.push(params)
        todoLog(`Добавлен агент: ${params.agentHost}:${params.port}`)
        res.json({ error: 0})
    }
    else {
        todoLog(`Неудачная попытка добавить агент: ${params.agentHost}:${params.port}`)
        res.json({ error: 1})
    }  
}

// пока нет защиты от повторок
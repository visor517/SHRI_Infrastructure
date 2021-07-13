const todoLog = require("./todoLog")
const {agents} = require('../index')

module.exports = (req,res) => {
    const params = req.query
    if (params && params.port && params.agentHost) {

        let isNew = true
        for (let i=0; i < agents.length; i++) {
            if ((agents[i].port == params.port) && (agents[i].agentHost == params.agentHost)) {
                isNew = false
                break
            }
        }
        if (isNew) {
            agents.push(params)
            todoLog(`Добавлен агент: ${params.agentHost}:${params.port}`)
        }
        else todoLog(`Попытка добавить агент повторно: ${params.agentHost}:${params.port}`)
        
        res.json({ error: 0})
    }
    else {
        todoLog(`Неудачная попытка добавить агент: ${params.agentHost}:${params.port}`)
        res.json({ error: 1})
    }  
}

const todoLog = require('./todoLog')
const {agents} = require('../index')
const giveTask = require('./giveTask')

module.exports = (req,res) => {
    const agent = req.query
    if (agent && agent.port && agent.agentHost) {

        let isNew = true
        for (let i=0; i < agents.length; i++) {
            if ((agents[i].port == agent.port) && (agents[i].agentHost == agent.agentHost)) {
                isNew = false
                break
            }
        }

        if (isNew) {
            agents.push(agent)
            todoLog(`Добавлен агент: ${agent.agentHost}:${agent.port}`)

            giveTask()  // запускаем выдачу задач тк агент пришел
        }
        else todoLog(`Попытка добавить агент повторно: ${agent.agentHost}:${agent.port}`)
        
        res.json({ error: 0})
    }
    else {
        todoLog(`Неудачная попытка добавить агент: ${agent.agentHost}:${agent.port}`)
        res.json({ error: 1})
    }  
}

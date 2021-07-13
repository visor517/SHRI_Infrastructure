const todoLog = require('./todoLog')
const {agents, tasks, works, settings} = require('../index')
const axios = require('axios')

module.exports = async () => {
    while (agents.length > 0 && tasks.length > 0) {
        const agent = agents.shift()
        const task = tasks.shift()
        const response = await axios.get(`http://${agent.agentHost}:${agent.port}/build?id=${task.id}&commitHash=${task.commitHash}&repoName=${settings.repoName}&buildCommand=${settings.buildCommand}`)

        if (response.data.error == 0) {
            works.push({agent: agent, task: task})
            todoLog(`Агенту: ${agent.agentHost}:${agent.port} выдано задание ${task.id}`)
        }
        else {
            agents.push(agent)
        }
    }
}

// при неудаче отправки нужно что-то делать с агентом
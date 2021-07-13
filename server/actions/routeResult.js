const todoLog = require("./todoLog")
const {agents, results, works} = require('../index')
const giveTask = require('./giveTask')

module.exports = (req,res) => {
    const task = req.query
    if (task && task.buildId && task.success && task.buildLog) {
        results.push(task)
        todoLog(`Получен результат сборки: ${task.buildId} success:${task.success}`)
        res.json({ error: 0})
        
        for (let i=0; i<works.length; i++) {            // ищем а отправляли ли такую задачу
            if (works[i].task.id == task.buildId) {
                // нужно убрать задачу из works
                agents.push(works[i].agent)             // возвращаем агента в очередь
                giveTask()                              // запускаем выдачу задач тк агент вернулся
                break
            }
        }
    }
    else {
        todoLog(`Неудачная попытка получения результатов сборки ${task.buildId}, статус ${task.success}, лог ${task.buildLog}`)
        res.json({ error: 1})
    }
}

const todoLog = require('./todoLog')
const { tasks } = require('../index')
const giveTask = require('./giveTask')
const getFromAPI = require('./getFromAPI')

module.exports = async url => {
    response = await getFromAPI('https://shri.yandex/hw/api/build/list')
    if (response) {
        let count = 0
        response.data.data.forEach(element => {
            if (element.status == "Waiting") {
                tasks.push(element)
                count++
            }
        })
        todoLog(`С API загружено ${count} новых задач`)

        if (count > 0) giveTask()  // запускаем выдачу задач тк получены новые
    }
}

// добавить catch и логирование ошибки
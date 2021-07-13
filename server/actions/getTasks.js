require('dotenv').config()
const todoLog = require('./todoLog')
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`
const {tasks} = require('../index')
const giveTask = require('./giveTask')

module.exports = async (url) => {
    response = await axios.get('https://shri.yandex/hw/api/build/list')
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

// добавить catch и логирование ошибки
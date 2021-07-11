require('dotenv').config()
const todoLog = require('./todoLog')
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`
const {tasks} = require('../index')

module.exports = async () => {
    response = await axios.get('https://shri.yandex/hw/api/build/list')
    let count = 0
    response.data.data.forEach(element => {
        if (element.status == "Waiting") {
            tasks.push(element)
            count++
        }  
    })
    todoLog(`С API загружено ${count} новых задач`)
}

// добавить catch и логирование ошибки
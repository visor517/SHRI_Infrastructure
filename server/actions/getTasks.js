require('dotenv').config()
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`
const tasks = require('../index')

module.exports = async () => {
    response = await axios.get('https://shri.yandex/hw/api/build/list')
    response.data.data.forEach(element => {
        if (element.status == "Waiting") {
            tasks.push(element)
        }  
    })
}
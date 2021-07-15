require('dotenv').config()
const todoLog = require('./todoLog')
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`

module.exports = async url => {
    try {
        const response = await axios.get(url)
        return response
    }
    catch {
        todoLog(`Ошибка соединения API по запросу ${url}`)
        console.log('Ошибка соединения API')
        return null
    }
}
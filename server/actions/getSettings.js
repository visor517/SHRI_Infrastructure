require('dotenv').config()
const todoLog = require('./todoLog')
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`
const {settings} = require('../index')

module.exports = async (url) => {
    response = await axios.get('https://shri.yandex/hw/api/conf')

    if (response.data.data.repoName && response.data.data.buildCommand) {
        settings.repoName = response.data.data.repoName
        settings.buildCommand = response.data.data.buildCommand
        todoLog(`С API загружены настройки repoName:${settings.repoName} buildCommand:${settings.buildCommand}`)
    }
    else {
        todoLog('Настройки с API не пришли')
    }
}

// добавить catch и логирование ошибки
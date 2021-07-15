const todoLog = require('./todoLog')
const { settings } = require('../index')
const getFromAPI = require('./getFromAPI')

module.exports = async (url) => {
    response = await getFromAPI('https://shri.yandex/hw/api/conf')

    if (response && response.data.data.repoName && response.data.data.buildCommand) {
        settings.repoName = response.data.data.repoName
        settings.buildCommand = response.data.data.buildCommand
        todoLog(`С API загружены настройки repoName:${settings.repoName} buildCommand:${settings.buildCommand}`)
    }
    else {
        todoLog('Настройки с API не пришли')
    }
}

// добавить catch и логирование ошибки
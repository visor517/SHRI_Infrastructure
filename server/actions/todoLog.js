const {appendFileSync} = require('fs')
const {logFile} = require('../index')

module.exports = (message) => {
    appendFileSync(`${__dirname}/..${logFile}`, `${new Date().toLocaleString("ru", {hour: "2-digit", minute:"2-digit", second:"2-digit"})}| ${message}\n`,
        {encoding: 'utf8'}, () => console.log('Ошибка ведения лога'))
}
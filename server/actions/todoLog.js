const {appendFileSync} = require('fs')

const date = new Date()
const logFile = `${__dirname}/../logs/${date.getHours()}${date.getMinutes()}${date.getSeconds()}.txt`

module.exports = (message) => {
    appendFileSync(logFile, `${new Date().toLocaleString("ru", {hour: "2-digit", minute:"2-digit", second:"2-digit"})}| ${message}\n`,
        {encoding: 'utf8'}, () => console.log('Ошибка ведения лога'))
}
const {appendFileSync} = require('fs')

module.exports = (file, message) => {
    appendFileSync(file, `${new Date().toLocaleString("ru", {hour: "2-digit", minute:"2-digit", second:"2-digit"})}| ${message}\n`,
        {encoding: 'utf8'}, () => console.log('Ошибка ведения лога'))
}
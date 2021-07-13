const toServer = require('./toServer')

module.exports = task => {
    setTimeout(
        () => toServer(`/notify-build-result?buildId=${task.id}&duration=${Math.floor(Math.random() * 120)}&success=${Math.random() < 0.5}&buildLog=${"Build Log"}`),
    Math.random() * 30000)
}

// тут я делаю вид, что что-то собирал.
// Непонятно просто где производить сборку. Все агенты должны были работать в одной папке с клоном репозитория?
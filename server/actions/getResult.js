const todoLog = require("./todoLog")
const {results} = require('../index')

module.exports = (req,res) => {
    const params = req.query
    if (params && params.id && params.status && params.log) {
        results.push(params)
        todoLog(`Получен результат сборки ${params.id}: ${params.status}`)
        res.json({ error: 0})
    }
    else {
        todoLog(`Неудачная попытка получения результатов сборки ${params.id}, статус ${params.status}, лог ${params.log}`)
        res.json({ error: 1})
    }  
}

// нет проверки на правильность заполнения и повторки
// и запускалась ли вообще эта сборка
require('dotenv').config()
const axios = require('axios')
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.TOKEN}`

it('Получить данные с API', async () => {
    const tasks = []
    for (let i = 0; i < 5; i++) {
        tasks.push({
            "commitMessage": "test",
            "commitHash": "hash" + i,
            "branchName": "brunch",
            "authorName": "test"
        })
    }
    await axios.post('https://shri.yandex/hw/api/build/request', tasks)     // подумаю что здесь ловить
    
    //getTasks

    //expect(data.data).toBeDefined()
})

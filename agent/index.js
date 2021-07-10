const express = require('express')
const {port} = require('./agent-conf.json')

const app = express()


app.get('/notify-agent', (req,res) => {
    console.log(req.query)
    res.json({ error: 0})
})

app.get('/notify-build-result', (req,res) => {
    console.log(req.query)
    res.json({error: 0})
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))
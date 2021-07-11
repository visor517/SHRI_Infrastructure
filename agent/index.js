const express = require('express')
const {port} = require('./agent-conf.json')
const fs = require('fs')

const app = express()


app.get('/build', (req,res) => {
    fs.writeFile("logg.txt", req.query)
    res.json({ error: 0})
})

app.listen(port, () => console.log(`Server has been started on port ${port} ...`))
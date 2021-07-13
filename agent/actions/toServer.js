const axios = require('axios')
const {serverHost, serverPort} = require('../agent-conf.json')

module.exports = (params) => {
    const result = axios.get('http://'+serverHost+':'+serverPort+params)
}
const fs = require('fs')

const filePath = './js-dev.json'

const loadSnippets = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log('Semething went wrong loading file: %s', e.Error)
        return []
    }
}

function getSnippets() {
    return loadSnippets()
}

module.exports = {
    getSnippets: getSnippets
}

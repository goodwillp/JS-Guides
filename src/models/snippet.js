const loadSnippets = require('./../tree/loadtSnippets')

const snippets = loadSnippets.getSnippets()

function findSnippet(id) {
    for(let i = 0; i < snippets.length; i++)
    {
        if(snippets[i].uuid == id)
        return snippets[i]
    }
    return undefined
}

module.exports = {
    findSnippet: findSnippet
}
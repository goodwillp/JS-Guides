const fs = require('fs')
const chalk = require('chalk')

const addSnippet = (toInsert) => {
    const snippets = loadSnippets()
    const duplicateSnippet = snippets.find((snippet) => snippet.title === toInsert.title)

    if (!duplicateSnippet) {
        snippets.push(toInsert)
        saveSnippets(snippets)
        console.log(chalk.green.inverse('New Snippet added!'))
    } else {
        console.log(chalk.red.inverse('Snippet title taken!'))
    }
}

const removeSnippet = (title) => {
    const snippets = loadSnippets()
    const snippetsToKeep = snippets.filter((snippet) => snippet.title !== title)

    if (snippets.length > snippetsToKeep.length) {
        console.log(chalk.green.inverse('Snippet removed!'))
        saveSnippets(snippetsToKeep)
    } else {
        console.log(chalk.red.inverse('No Snippet found!'))
    }
}

//Need to be refactored to pass list of objects
const listSnippets = () => {
    const snippets = loadSnippets()

    // console.log(chalk.blueBright.bold("Your Snippets:"))
    // snippets.forEach(snippet => {
    //     console.log(chalk.green(snippet.title))
    // })
    return snippets
}

//Need to be refactored to pass list of objects
const readSnippet = (title) => {
    const snippets = loadSnippets()
    console.log(snippets[0].title)
    const snippet = snippets.find((snippet) => snippet.title === title)

    if (snippet) {
        console.log(chalk.inverse(snippet.title))
        console.log(snippet.element)
    } else {
        console.log(chalk.red.inverse('Snippet does not exist!!!!'))
    }
}

const saveSnippets = (snippets) => {
    const dataJSON = JSON.stringify(snippets)
    fs.writeFileSync(process.env.JSONJS, dataJSON, (err) => {
        if (err) {
            throw err
        }
    })
}

const loadSnippets = () => {
    try {
        const dataBuffer = fs.readFileSync(process.env.JSONJS)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addSnippet: addSnippet,
    removeSnippet: removeSnippet,
    listSnippets: listSnippets,
    readSnippet: readSnippet
}
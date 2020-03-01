const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = new express.Router()
const snippets1 = require('./../models/snippet')

router.get('/snippet/:id', (req, res) => {
    try {
        const snippet = snippets1.findSnippet(req.params.id)
        if (!snippet) {
            return res.status(404).send()
        }

        res.render('snippets', {
            title: 'Snippets',
            name: 'William Gooding',
            consoleResults: 'Testing the Results',
            testCodeText: snippet.testCode,
            codeSnippet: snippet.snippet,
            snippetTitle: snippet.title,
            snippetSummary: snippet.summary,
            snippetDescription: snippet.description
        })        
    } catch (e) {
        console.log('Something went horribly wrong')
        res.status(500).send()
    }


})

module.exports = router
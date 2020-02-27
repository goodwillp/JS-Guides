const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = new express.Router()

//Load Tree
const tree = require('./../tree/buildTree') 
//console.log(tree)

//Next step to make this dynamic....
const basicObjectDefinition = require('../1-JSObjectBasics.js')
const [bod, topics, chapters] = basicObjectDefinition.bod()
const bodTopic = topics//['JS', 'Patterns', 'RabbitMQ', 'Jest']
const bodChapter = chapters//['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4']
const bodElement = ['Element 1', 'Element 2', 'Element 3', 'Element 4']

router.get('', (req, res) => {
    res.render('index', {
        title: 'Snippets',
        name: 'William Gooding',
        topic: topics,
        chapters: chapters,//chapters,
        element: bodElement
    })
})

router.get('/snippet', (req, res) => {
    res.render('snippets', {
        title: 'Snippets',
        name: 'William Gooding',
        consoleResults: 'Testing the Results',
        testCodeText: bod.testCode,
        codeSnippet: bod.snippet,
        snippetTitle: bod.tittle,
        snippetSummary: bod.summary,
        snippetDescription: bod.description,
        topic: bodTopic,
        chapter: bodChapter,
        element: bodElement
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'William Gooding'
    })
})

router.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help me to help you',
        title: 'Help',
        name: 'William Gooding'
    })
})

router.get('/help/*', (req, res) => {
    res.render('notFound', {
        title: 'My not Found Article Page',
        notFoundText: 'Help Article not found!!!',
        name: 'William Gooding'
    }
    )
})

router.get('*', (rew, res) => {
    res.render('notFound',
        {
            title: 'My 404 Page',
            notFoundText: 'Page not found!!!',
            name: 'William Gooding'
        }
    )
})   

module.exports = router
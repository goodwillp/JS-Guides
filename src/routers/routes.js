const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = new express.Router()
const treeBuilder = require('./../tree/buildTree') 
const TreeStructure = require('./../tree/treeStructure')
const loadSnippets = require('./../tree/loadtSnippets')

//Next step to Remove This....
const topic = ['JS', 'Patterns', 'RabbitMQ', 'Jest']
const chapter = [{ 'topic': 'JS', 'chapter': 'Chapter 1' }, 
                    { 'topic': 'Patterns', 'chapter': 'Chapter 2' }, 
                    { 'topic': 'RabbitMQ', 'chapter': 'Chapter 3' }, 
                    { 'topic': 'Jest', 'chapter': 'Chapter 4' },
                    { 'topic': 'JS', 'chapter': 'Chapter 5' }]
const element = ['Element 1', 'Element 2', 'Element 3', 'Element 4']


//Load Tree
var tree = new TreeStructure.Tree()
tree = treeBuilder.buildTree(tree)

// console.log(tree)

hbs.registerHelper('masterMaster', (value, options) => {
    const topics = tree._getChildren()

    //console.log(treeChildrenL1[0].children[0])
    let out = '<div class="row">'
        for (i = 0; i < topics.length; i++) { //Level1: Topic
        out += '<div class="column card">'
            out += '<div class="card">'
                out += '<h3>' + topics[i].value + '</h3>'  
                    out += '<ul>'
                    let chapters = topics[i].children //Level2: Chapter
                    for (j = 0; j < chapters.length; j++){
                        out += '<li>' +  chapters[j].value 
                            out += '<ul>'
                            let subjects = chapters[j].children //Level3: Subject
                            for (k = 0; k < subjects.length; k++) {
                                out += '<li>' + subjects[k].value 
                                    out += '<ul>'
                                    let titles = subjects[k].children //Level4: Titles
                                    for(l = 0; l < titles.length; l++){
                                        out += '<li>' + titles[l].value + ' uuid: ' + titles[l].uuid + '</li>'
                                    }
                                    out += '</ul>'
                                out += '</li>'
                            }
                            out += '</ul>'
                        out += '</li>'
                    }
                    out += '</ul>'
            out += '</div>'
        out += '</div>'
    }
    out += '</div>'

    return new hbs.SafeString(out)
})

hbs.registerHelper('treeDecomposer', (value) => {
    return value + 7
})

hbs.registerHelper('list', (value, options) => {
    //value = chapters
    let out = "<ul>"
    for (i = 0; i < value.length; i++){
        out += "<li>" + options.fn(value[i]) + "</li>"
    }

    return out + "</ul>"
})


// // Uncomment this code to validate tree is well formed
// function traverseTree(tree) {
//     tree._traverse((node) => {
//         if (node.uuid != null) {
//             console.log('Value: ' + node.value + ', It\'s a Title, with ID: ' + node.uuid);
//         }
//         else if (node.isTopic === true || node.value == 'Root') {
//             console.log('Value: ' + node.value + ', It\'s a Topic');
//         }
//         else {
//             console.log('Value: ' + node.value + ', It\'s an intermediate node');
//         }
//     });
// }

// traverseTree(tree)

//Load Snippets temporarilly
const snippets = loadSnippets.getSnippets()
const snipppet = snippets[0]

//Next step to Remove This....
const bodTopic = ['JS', 'Patterns', 'RabbitMQ', 'Jest']
const bodElement = ['Element 1', 'Element 2', 'Element 3', 'Element 4']

router.get('', (req, res) => {
    res.render('index1', {
        title: 'Snippets',
        name: 'William Gooding',
        topic: bodTopic,
        element: bodElement,
        chapter: chapter,
        myTree: tree
    })
})


// //Next step to Remove This....
// const bodTopic = ['JS', 'Patterns', 'RabbitMQ', 'Jest']
// const bodChapter = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4']
// const bodElement = ['Element 1', 'Element 2', 'Element 3', 'Element 4']

// router.get('', (req, res) => {
//     res.render('index', {
//         title: 'Snippets',
//         name: 'William Gooding',
//         topic: bodTopic,
//         chapters: bodChapter,
//         element: bodElement
//     })
// })

router.get('/snippet', (req, res) => {
    res.render('snippets', {
        title: 'Snippets',
        name: 'William Gooding',
        consoleResults: 'Testing the Results',
        testCodeText: snipppet.testCode,
        codeSnippet: snipppet.snippet,
        snippetTitle: snipppet.tittle,
        snippetSummary: snipppet.summary,
        snippetDescription: snipppet.description,
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
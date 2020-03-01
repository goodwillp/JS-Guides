const path = require('path')
const express = require('express')
const hbs = require('hbs')
const router = new express.Router()
const treeBuilder = require('./../tree/buildTree') 
const TreeStructure = require('./../tree/treeStructure')

//Load Tree
var tree = new TreeStructure.Tree()
tree = treeBuilder.buildTree(tree)

//https://webapplog.com/handlebars/ for reference on how I impleneted this helper
//TODO: Change the link dinamically for production
hbs.registerHelper('masterMaster', (value, options) => {
    const topics = tree._getChildren()

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
                                        out +=
                                          '<li><a href="http://localhost:3000/snippet/' +
                                          titles[l].uuid +
                                          '">' +
                                          titles[l].value +
                                          " uuid: " +
                                          titles[l].uuid +
                                          "</a></li>";
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

router.get('', (req, res) => {
    res.render('index', {
        title: 'Snippets',
        name: 'William Gooding',
        myTree: tree
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
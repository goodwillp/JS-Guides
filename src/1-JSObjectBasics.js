const chalk = require('chalk');
const jsonObjectBasic = require('./models/snippetFormat')
const JSONfile = require('./files/JSONfile')

const log = console.log
const logGreen = chalk.green.inverse

function getTopics(data) {
    let topics = new Set()
    data.forEach(element => {
        topics.add(element.topic)
    });
    topics = [...topics]
    return topics
}

function getChapters(topic, data) {
    let chapters = new Set()
    data.forEach(element => {
        if (element.topic === topic) {
            chapters.add(element.chapter)
        }
    });
    chapters = [...chapters]
    return chapters
}

function chapterLists(topics, data) {
    let chapters = []
    topics.forEach(topic => {
        chapters.push(getChapters(topic, data))
    });
    return chapters
}


const snippets = JSONfile.listSnippets()
logGreen(snippets)


//Get list of topics
topics = getTopics(snippets)

//Get chapters from 1st and 2nd topic
const chapters = chapterLists(topics, snippets)

//Get subjects from first topic, second chapter



function bod() {
    let snippet = snippets[0]
    //console.log(snippet)
    return [snippet, topics, chapters]
}

module.exports = {bod:  bod}
const baseData = require('./1-BaseData')

const data = baseData.getSnippets()
// console.log(data)

function getTopics(data) {
    let topics = new Set()
    data.forEach(element => {
        topics.add(element.topic)
    });
    topics = [...topics]
    return topics
}

function getChapters(topic) {
    let chapters = new Set()
    data.forEach(element => {
        if (element.topic === topic) {
            chapters.add(element.chapter)
        }
    });
    chapters = [...chapters]
    return chapters
}

function chapterLists(topics) {
    let chapters = []
    topics.forEach(topic => {
        chapters.push(getChapters(topic))
    });
    return chapters
}

//Get list of topics
topics = getTopics(data)
console.log(topics)

//Get chapters from 1st and 2nd topic
const chapters = chapterLists(topics)
console.log(chapters)

//Get subjects from first topic, second chapter
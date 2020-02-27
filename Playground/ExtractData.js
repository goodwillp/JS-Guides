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

function isDuplicate(elementToTest, nonDuplicatedSubject) {
    let isFound = false

    for (i = 0; i < nonDuplicatedSubject.length; i++) {
        if (nonDuplicatedSubject[i].subject == elementToTest.subject) {
            isFound = true
            break
        }
    }
    return isFound
}

function removeDuplicateSubjects(subjectList) {
    const nonDuplicatedSubjects = []

    subjectList.forEach(element => {
        if (!isDuplicate(element, nonDuplicatedSubjects)) {
            nonDuplicatedSubjects.push({
                subject: element.subject,
                chapter: element.chapter
            })
        }
    });
    return nonDuplicatedSubjects
}

function subjectLists(data) {
    let subjects = []
    data.forEach(element => {
        subjects.push({
            chapter: element.chapter,
            subject: element.subject
        })
    });
    const nonDuplicatedSubjects = removeDuplicateSubjects(subjects)

    return nonDuplicatedSubjects
}

function titleLists(data) {
    let titles = []
    data.forEach(element => {
        titles.push({
            subject: element.subject,
            title: element.title,
            uuid: element.uuid
        })
    });

    return titles
}

module.exports = {
    getTopics: getTopics,
    chapterLists: chapterLists,
    subjectLists: subjectLists,
    titleLists: titleLists
}
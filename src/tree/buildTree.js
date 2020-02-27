const basicObjectDefinition = require('./1-BaseData')
const Tree = require('./treeStructure')
const extractData = require('./extractData')

//Source: https://medium.com/@_jmoller/javascript-data-structures-trees-c961297e6482
//Assumes a complete Snippet, so 4 levels of depth in any given branch (NO EXCEPTIONS)
//Also assumes is a well formed file (NO DUPLICATED TITLES)
function buildTree() {
    //Get Data
    const snippets = basicObjectDefinition.getSnippets()
    const topics = extractData.getTopics(snippets)
    const chapters = extractData.chapterLists(topics, snippets)
    const subjects = extractData.subjectLists(snippets)
    const titles = extractData.titleLists(snippets)

    const tree = new Tree.Tree();
    tree._addNode('Root');

    //Level 1
    topics.forEach(topic => {
        // console.log('Topic: %s', topic)
        tree._addNode(topic, 'Root', true, null)
    });

    //Level 2
    for (let i = 0; i < chapters.length; i++) {
        chapters[i].forEach(chapter => {
            // console.log('Chapter: %s', chapter)
            tree._addNode(chapter, topics[i], false, null)
        });
    }

    //Level 3
    subjects.forEach(subject => {
        // console.log('Subjects: %s  Chapter: %s', subject.subject, subject.chapter)
        tree._addNode(subject.subject, subject.chapter, false, null)
    });

    //Level 4
    titles.forEach(title => {
        // console.log('Titles: %s, Subject: %s, uuid: %d', title.title, title.subject, title.uuid)
        tree._addNode(title.title, title.subject, false, title.uuid)

    })

    return tree
}

const tree = buildTree()

//Uncomment this code to validate tree is well formed
// tree._traverse((node) => {
//     if (node.uuid != null) {
//         console.log('Value: ' + node.value + ', It\'s a Title, with ID: ' + node.uuid);
//     }
//     else if (node.isTopic === true || node.value == 'Root') {
//         console.log('Value: ' + node.value + ', It\'s a Topic');
//     }
//     else {
//         console.log('Value: ' + node.value + ', It\'s an intermediate node');
//     }
// });
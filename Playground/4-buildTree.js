const basicObjectDefinition = require('./1-BaseData')
const snippets = basicObjectDefinition.getSnippets()

//console.log(snippets)

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

function isDuplicate(elementToTest, nonDuplicatedSubject)
{
    let isFound = false
    
    for (i = 0; i < nonDuplicatedSubject.length; i++)
    {
        if (nonDuplicatedSubject[i].subject == elementToTest.subject) {
            isFound = true
            break
        }
    }
    return isFound
}


//Broke function.... need to fix for subject and complete for title
function removeDuplicateSubjects(subjectList, field)
{
    console.log('Field: ' + field)
    const nonDuplicatedSubjects = []

    subjectList.forEach(element => {
        if(!isDuplicate(element, nonDuplicatedSubjects))
        {
            let toPush = {
                subject: element.subject
            }
            if (field == 'subject') {
                toPush.chapter = element.chapter
            }
            else if (field == 'title')
            {
                toPush.title = element.title
                toPush.uuid = element.uuid
            }

            console.log(toPush)
            nonDuplicatedSubjects.push({
                toPush
            })
        }
    });
    return nonDuplicatedSubjects
}

function subjectLists(data)
{
    let subjects = []
    data.forEach(element => {
        subjects.push({
            chapter: element.chapter,
            subject: element.subject
        })
    });
    const nonDuplicatedSubjects = removeDuplicateSubjects(subjects, 'subject')

    return nonDuplicatedSubjects
}

// function titleLists(data) {
//     let titles = []
//     data.forEach(element => {
//         titles.push({
//             chapter: element.subject,
//             title: element.title,
//             uuid: element.uuid
//         })
//     });
//     const nonDuplicatedTitles = removeDuplicateSubjects(titles, 'title')

//     return nonDuplicatedSubjects
// }


topics = getTopics(snippets)
// console.log('Topics: ' + topics)

const chapters = chapterLists(topics, snippets)
//  console.log('Chapters: ' + chapters)

const subjects = subjectLists(snippets)
// console.log('Subjects: ' + subjects)

// const titles = titleLists(snippets)
// console.log('Subjects: %s', subjects)

class Tree {
    constructor(root) {
        this._root = root || null;
    }

    _traverse(callback) {
        const self = this;
        function goThrough(node) {
            callback(node);
            node.children.forEach((child) => {
                goThrough(child);
            });
        }
        goThrough(this._root);
    }


    _addNode(value, parentValue, isTopic, uuid) {
        const newNode = {
            value,
            isTopic,
            uuid,
            children: []
        };

        if (this._root === null) {
            this._root = newNode;
            return;
        }

        this._traverse((node) => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }

    _removeNode(value) {
        this._traverse((node) => {
            node.children.forEach((childNode, index) => {
                if (childNode.value === value) {
                    node.children.splice(index, 1);
                }
            });
        })
    }

    _search(value) {
        let returnNode = 'Not Found';
        this._traverse((node) => {
            if (node.value === value) {
                returnNode = node;
            }
        });
        return returnNode;
    }

    _displayLeafs(parentValue) {
        const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue;
        let leafsRet = [];
        if (parentValue.children && !parentValue.children.length) {
            return parentValue;
        }

        parentNode.children.forEach((child) => {
            leafsRet.push(this._displayLeafs(child));
        });

        return leafsRet.flat();
    }

}

class Node {
    constructor(value, children, isTopic, uuid) {
        this.value = value,
        this.children = children,
        this.isTopic = this.isTopic,
        this.uuid = uuid
    }
}

//Source: https://medium.com/@_jmoller/javascript-data-structures-trees-c961297e6482
//Assumes a complete Snippet, so 4 levels of depth in any given branch (NO EXCEPTIONS)
// Root
//  |- Node1
//      |-Node3
//          |-Node8
//              |-Node12
//              |-Node13
//          |-Node9
//              |-Node14
//          |-Node10
//              |-Node15
//      |-Node4
//          |-Node11
//              |-Node16
//  |- Node2
//      |-Node5
//          |-Node6
//              |-Node7

const tree = new Tree();

tree._addNode('Root');

//Level 1
topics.forEach(topic => {
    console.log('Topic: %s', topic)
    tree._addNode(topic, 'Root', true, null)
});

//Level 2
for (let i = 0; i < chapters.length; i++ )
{
    chapters[i].forEach(chapter => {
        console.log('Chapter: %s', chapter)
        tree._addNode(chapter, topics[i], false, null)
    });
}

//Level 3
subjects.forEach(subject => {
    console.log('Subjects: %s  Chapter: %s', subject.subject, subject.chapter)
    tree._addNode(subject.subject, subject.chapter, false, null)    
});

//Level 4
// titles.forEach(title => {
//     console.log('Titles: ' + title.title + 'Subject: ' + title.subject)
// })

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

console.log('');
console.log('');
//console.log(tree._displayLeafs('JS'));
//console.log(tree)
//Level 1
// tree._addNode('Node1', 'Root', true, null);
// tree._addNode('Node2', 'Root', true, null);

// //Level 2
// tree._addNode('|..Node3', 'Node1', false, null);
// tree._addNode('|..Node4', 'Node1', false, null);
// tree._addNode('|..Node5', 'Node2', false, null);

// //Level 3
// tree._addNode('|..|..Node8', '|..Node3', false, null);
// tree._addNode('|..|..Node9', '|..Node3', false, null);
// tree._addNode('|..|..Node10', '|..Node3', false, null);
// tree._addNode('|..|..Node11', '|..Node4', false, null);
// tree._addNode('|..|..Node6', '|..Node5', false, null);

// //Level 4
// tree._addNode('|..|..|..Node12', '|..|..Node8', false, '12');
// tree._addNode('|..|..|..Node13', '|..|..Node8', false, '13');
// tree._addNode('|..|..|..Node14', '|..|..Node9', false, '14');
// tree._addNode('|..|..|..Node15', '|..|..Node10', false, '15');
// tree._addNode('|..|..|..Node16', '|..|..Node11', false, '16');
// tree._addNode('|..|..|..Node7', '|..|..Node6', false, '7');
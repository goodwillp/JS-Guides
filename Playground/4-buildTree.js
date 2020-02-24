var topics = ["topic1", "topic2"]
var chapters = [["chapter1", "chapter2", "chapter3"], ["chapter4", "chapter5"]]


var snippet = {"RootT": {}}
var index = 0
snippet.RootT[index] = "topic1"
for (i = 0; i < topics.length; i++)
{
    let index = "index"+i
    snippet.RootT[index] = topics[i]
    for (j = 0; j < chapters.length; j++) {
        snippet.RootT[index] = chapters[j]
    }
}




console.log(snippet)
console.log(snippet.RootT)
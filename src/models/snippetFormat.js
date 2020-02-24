function snippet(topic, chapter, subject, element, title, summary, snippet, testCode, lastUpdate, uuid) {
    this.topic = topic//: 'JS',
    this.chapter = chapter//: 'references',
    this.subject = subject//: 'Built in Objects',
    this.element = element//: 'Aggregate Error',
    this.title = title
    this.summary = summary
    this.snippet = snippet
    this.testCode = testCode
    this.toRun = this.snippet + this.testCode
    this.lastUpdate = lastUpdate
    this.uuid = uuid
}

exports.Snippet = snippet
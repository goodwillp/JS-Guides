const JSONfile = require('../src/files/JSONfile')

test('Should Save a File', () => {
    const testData = { testKey: "testValue" }
    //JSONfile.saveFile(testData)
    //expect(task).is(null)
    expect(2).toBe(2)
    console.log(process.env.JSONJS)
    console.log(process.env.PORT)
})

test('Should do Something', () => {
    const testData = { testKey: "testValue" }
    //JSONfile.saveFile(testData)
    //expect(task).is(null)
    expect(2).toBe(22)
})
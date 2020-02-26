const fs = require('fs')

const loadSnippets = () => {
    try {
        const dataBuffer = fs.readFileSync('js-dev.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const saveSnippets = (snippets) => {
    const dataJSON = JSON.stringify(snippets)
  fs.writeFileSync('js-dev.json', dataJSON, (err) => {
        if (err) {
            throw err
        }
    })
}

const smallSnippets = [
  {
    topic: 'JS',
    chapter: 'Dynamic client-side Scripting',
    subject: 'JS Object Basics',
    element: 'Object Basics',
    title: '1 - Sub - namespaces',
    summary: '',
    snippet: 
    `
          const personSubNamespaced = {
              name: {
                  first: 'Bob',      //This ia a Sub-namespace
                  last: 'Smith',
              }
          }

          //Extend person Object properties
          person['eyes'] = 'hazel';
          person.farewell = function () { console.log("Bye everybody!"); }

          log(logGreen('Extending/Adding propereties in an Object'))
          console.log(person['eyes'])
          person.farewell()
          console.log()

          //Dynamically set Properties and Values
          let myDataName1 = person.value;
          let myDataValue1 = person.value;
          person[myDataName1] = myDataValue1;

          //Dynamically set Properties and Values on a new Property
          let myDataName = 'height'
          let myDataValue = '1.75m'
          person[myDataName] = myDataValue

          log(logGreen('Dynamically set Properties and Values on a new Property'))
          console.log(person[myDataName])
          `,
    testCode: 
          `
          log(logGreen('Using Sub-Namespacing'))
          console.log(personSubNamespaced.name.first)  //We access here sub-namespaces with dots
          console.log(personSubNamespaced['name']['last']) //We access here sub-namespaces with brackets
          console.log()

          log(logGreen('Changing Value of Property'))
          personSubNamespaced ['name']['last'] = 'Gooding'
          console.log(personSubNamespaced['name']['last']) 
          console.log()
          ` ,
    summary: '', 
    lastUpdate: '',
    uuid: '1'
  },
  {
    topic: 'JS',
    chapter: 'Dynamic client-side Scripting',
    subject: 'JS Object Basics',
    element: 'Object Basics',
    title: '0-Basic Object Definition',
    summary: 
          `
          An object is a collection of related data and/or functionality (which usually consists of several variables 
          and functions — which are called properties and methods when they are inside objects.)`,
    snippet: 
        `
        const person = { 
          name: ['Bob', 'Smith'], 
          age: 32,
          gender: 'male',
          interests: ['music', 'skiing'],
          bio: function () { 
              console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + 
              ' years old. He likes ' + this.interests[0] + 
              ' and ' + this.interests[1] + '.') 
          },
          greeting: function () { 
              console.log('Hi! I'm ' + this.name[0] + '.')
          }
        }` ,
    testCode: 
        `
          log(logGreen('Demonstrating Basic Object functionality')); 
          console.log(person.name);
          console.log(person.name[0]);
          console.log(person.interests[1]);
          console.log(person.age);
          console.log(person.bio());
          console.log(person.greeting());
          console.log();`,
    description: 
          `As with many things in JavaScript, creating an object often begins with defining and initializing a variable. 
        
          An object is made up of multiple members, each of which has a name (e.g. name and age above), and a value 
          (e.g. ['Bob', 'Smith'] and 32). Each name/value pair must be separated by a comma, and the name and value in 
          each case are separated by a colon. The syntax always follows this pattern:
                    const objectName = {
                      member1Name: member1Value,
                      member2Name: member2Value,
                      member3Name: member3Value
                      };
        
          The value of an object member can be pretty much anything — in our person object we've got a string, a number, 
          two arrays, and two functions. The first four items are data items, and are referred to as the object's properties. 
          The last two items are functions that allow the object to do something with that data, and are referred to as the 
          object's methods.
          `,
    lastUpdate: '',
    uuid: '2'
  },
  {
    topic: 'JS',
    chapter: 'Javascript Guide',
    subject:  'Working with Objects',
    element: '',
    title: '0 - Objects and Properties',
    summary: '',
    snippet: '',
    testCode: '',
    lastUpdate: '',
    uuid: '3'
  },
  {
    topic: 'JS',
    chapter: 'Javascript Guide',
    subject:  'Working with Objects',
    element: '',
    title: '1- Enumerate the properties of an object',
    summary: '',
    snippet: '',
    testCode: '',
    lastUpdate: '',
    uuid: '4'
  },
{
  topic: 'JS',
  chapter: 'Javascript Guide',
  subject:  'Working with Objects',
  element: '',
  title: '2.1 - Creating new Objects - Using Object Initializers',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '5'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Creational Patterns',
  subject:  'Singleton',
  element: '',
  title: 'Implement Singleton',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '6'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Creational Patterns',
  subject:  'Prototype',
  element: '',
  title: 'Implement Prototype',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '7'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Creational Patterns',
  subject:  'Factory',
  element: '',
  title: 'Implement Factory',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '8'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Creational Patterns',
  subject:  'Builder',
  element: '',
  title: 'Implement Builder',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '9'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Structural Patterns',
  subject:  'Adapter',
  element: '',
  title: 'Implement Adapter',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '10'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Structural Patterns',
  subject:  'Proxy',
  element: '',
  title: 'Implement Proxy',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '11'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Structural Patterns',
  subject:  'Composite',
  element: '',
  title: 'Implement Composite',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '12'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Structural Patterns',
  subject:  'Decorator',
  element: '',
  title: 'Implement Decorator',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '13'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Behavioral Patterns',
  subject:  'Chain of Responsibliity',
  element: '',
  title: 'Implement Chain of Responsibliity',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '14'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Behavioral Patterns',
  subject:  'Command',
  element: '',
  title: 'Implement Command',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '15'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Behavioral Patterns',
  subject:  'Iterator',
  element: '',
  title: 'Implement Iterator',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '16'
},                      
{
  topic: 'Patterns Node',
  chapter: 'Behavioral Patterns',
  subject:  'Observer',
  element: '',
  title: 'Implement Observer',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '17'
}, 
{
  topic: 'Patterns Node',
  chapter: 'Behavioral Patterns',
  subject:  'Strategy',
  element: '',
  title: 'Implement Strategy',
  summary: '',
  snippet: '',
  testCode: '',
  lastUpdate: '',
  uuid: '18'
}]

//Use these lines to create file...comment out after that
// smallSnippets.forEach(snippet => console.log(snippet.title))
// saveSnippets(smallSnippets)

function getSnippets() {
  return loadSnippets()
} 

module.exports = {
  getSnippets: getSnippets
}



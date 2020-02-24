console.log('Client side javascript file is loading')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') //# is for ids
const messageTwo = document.querySelector('#message-2') //# is for ids

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading City Forecast'
    messageTwo.textContent = ' '

    //   fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    // fetch('/weather?address=' + location).then((response) => { //remove first part, similar to routing to make it work with heroku and locally
    //     response.json().then((data) => {
    //         if (data.error) {
    //             messageOne.textContent = data.error
    //         } else {
    //             messageOne.textContent = data.location
    //             messageTwo.textContent = data.forecast
    //         }
    //     })
    // })
})
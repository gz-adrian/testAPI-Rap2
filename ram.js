/// more stuff here

// const { response, Router } = require('express') //I think this is a mistake
const express = require('express')
const app = express()
const cors = require('cors')// ! this might of fixed it
const PORT = 8002

app.use(cors()) // ! this might of fixed it

const rappers = { //savage list is the object. send it as a json object
  '21 savage': {
    'age': 29,
    'birthName': 'Sheya Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'charlie day': {
    'age': 46,
    'birthName': 'New York',
    'birthLocation': 'New York, USA'
  },
  'unknown': {
    'age': 0,
    'birthName': 'unknown.',
    'birthLocation': 'unknown'
  },
}


//For H site
// Note neeed 

//For H site
// Note neeed 
// more

//For H site
// Note neeed 

//For H site
// Note neeed 

//For H site
// * ! environment variable added. https://www.twitch.tv/videos/1316131994?t=02h39m51s
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
})

//original
// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
// })

//original
// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
// })

//original
// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
// })

//original
// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
// })

// const { response, Router } = require('express') //I think this is a mistake
const express = require('express')
const app = express()
const PORT = 8002

const rappers = { //savage list is the object. send it as a json object
  '21 savage': {
    'age': 29,
    'birthName': 'Sheya Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'charlie day': {
    'age': 46,
    //     'birthName': 'New York',
    //     'birthLocation': 'New York, USA'
    //   },
    //   'unknown': {
    //     'age': 0,
    //     'birthName': 'unknown.',
    //     'birthLocation': 'unknown'
    //   },
    // }

    // app.get('/', (request, response) => { // its an event listener. its a Network Request
    //   response.sendFile(__dirname + '/index.html')
    // })

    // Create another get Router
    app.get('/api/:name', (request, response) => {// [/'api'] it was called /:name
      const rapperName = request.params.name.toLowerCase() // what name for params.name and /:name'

      if (rappers[rapperName]) {  // conditional statement
        response.json(rappers[rapperName]) // all we do here is respond to savage
      } else {
        response.json(rappers['unknown'])
      }

    })

app.listen(PORT, () => {
      console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
    })

    // /more here


    // /more here


    // /more here


    // /more here




// // const { response, Router } = require('express') //I think this is a mistake
// const express = require('express')
// const app = express()
// const PORT = 8002

// const rappers = { //savage list is the object. send it as a json object
//   '21 savage': {
//     'age': 29,
//     'birthName': 'Sheya Abraham-Joseph',
//     'birthLocation': 'London, England'

//   },
// }

app.get('/', (request, response) => { // its an event listener. its a Network Request
      response.sendFile(__dirname + '/index.html')
    })

// Create another get Router
app.get('/api/:name', (request, response) => {// [/'api'] it was called /:name
      const rapperName = request.params.name.toLowerCase() // what name for params.name and /:name'

      if (rappers[rapperName]) {  // conditional statement
        response.json(rappers[rapperName]) // all we do here is respond to savage
      } else {
        response.json(rappers['unknown'])
      }

    })
  })

  // Create another get Router
  app.get('/api/:name', (request, response) => {// [/'api'] it was called /:name
    const rapperName = request.params.name.toLowerCase() // what name for params.name and /:name'

    if (rappers[rapperName]) {  // conditional statement
      response.json(rappers[rapperName]) // all we do here is respond to savage
    } else {
      response.json(rappers['unknown'])
    }

  })
})

  // Create another get Router
  app.get('/api/:name', (request, response) => {// [/'api'] it was called /:name
    const rapperName = request.params.name.toLowerCase() // what name for params.name and /:name'

    if (rappers[rapperName]) {  // conditional statement
      response.json(rappers[rapperName]) // all we do here is respond to savage
    } else {
      response.json(rappers['unknown'])
    }

  })
    })

// Create another get Router
app.get('/api/:name', (request, response) => {// [/'api'] it was called /:name
  const rapperName = request.params.name.toLowerCase() // what name for params.name and /:name'

  if (rappers[rapperName]) {  // conditional statement
    response.json(rappers[rapperName]) // all we do here is respond to savage
  } else {
    response.json(rappers['unknown'])
  }

})

// app.listen(PORT, () => {
//   console.log(`The server is now running on port ${PORT}! Betta Go catch it!`)
// })



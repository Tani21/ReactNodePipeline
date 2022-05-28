const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
  res.send('Hello World in main page!')
})

app.get('/about', (req, res) => {
    res.send('Hello World in about page!')
  })

  app.get('/home', (req, res) => {
    res.send('Hello World in home page!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
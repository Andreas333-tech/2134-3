const express = require('express')
const app = express()
const port = 1504

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/drive', (req, res) => {
  res.send("I'm Driving");
})

app.listen(port, () => {
  console.log(`Example app listening at https://math.seattleacademy.org:${port}`)
})
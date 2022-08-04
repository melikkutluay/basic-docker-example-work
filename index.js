const express = require('express')
const app = express()
const port = 8080
const db = require('./config').pg;

app.get('/', async (req, res) => {
  var data = await db("Sales").select("*");
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
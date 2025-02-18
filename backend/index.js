// import mongooserver and running it
const mongoserver = require('./db.js')()

// importing express server and running it
const express = require('express');
const app = express();

const port = 5000
// app.use(express.json());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Rahul!')
})

// making routes using files in routes folder
app.use("/api/auth", require('./routes/auth.js'))
app.use("/api/note", require('./routes/Notes.js'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// to start this use nodemon ./index.js in terminal 
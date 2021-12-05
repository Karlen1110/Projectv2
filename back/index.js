const {PORT: MYPORT} = require('./constants/constants.js')
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User.js')

require('./models/connectDB')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) =>{
  res.send(JSON.stringify({name: "KARL"}))
})

app.post('/register', async (req, res, next) =>{
  const username = req.body?.username
  const email = req.body?.email
  const password = req.body?.password
  const newUser = await User.create({
    username,
    email,
    password
  })
  res.send('added');
})

app.listen(MYPORT, () =>{
  console.log(`🚀 Server ready on http://localhost:${MYPORT}`);
})
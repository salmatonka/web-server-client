const express = require('express')
const app = express();
const cors =require('cors');

const port = process.env.PORT ||5000

app.use(cors());
const courses = require('./data/courses.json');

app.get('/details-courses', (req, res) => {
  res.send(courses)
})

app.get('/',(req,res)=>{
    res.send('news api')
})

app.listen(port, () => {
    console.log('courses server',port)
})
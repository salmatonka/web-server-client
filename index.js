const express = require('express')
const app = express();
const cors =require('cors');

const port = process.env.PORT ||5000

app.use(cors());
const items = require('./data/items.json');
const details = require('./data/details.json');


app.get('/items',(req,res)=>{
 
  res.send(items)

})
app.get('/details',(req,res)=>{
 
  res.send(details)

})
app.get('/details/:id',(req,res)=>{
   const id =req.params.id;
   const selectDetails =details.find(d=d._id ===id);
  res.send(selectDetails)

})




app.get('/item/:id',(req,res)=>{
  const id = req.params.id;

const selectedItem = details.find( d=>d._id ===id)
res.send(selectedItem)
  
})



app.get('/',(req,res)=>{
    res.send('courses api')
})


app.listen(port, () => {
    console.log('courses server',port)
})
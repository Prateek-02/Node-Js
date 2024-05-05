const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/about',(req,res)=>{
    res.send("This is about Page");
})
app.get('/services',(req,res)=>{
    res.send("This is services Page");
})

app.listen(port, () =>{
    console.log(`Server is listening at ${port}`);
})
const express = require('express');
const app = express();
const port = 5000;

app.get('/node',(req,res)=>{
    res.send("This is etp for INT222");
})
app.get('/Angular',(req,res)=>{
    res.send("This is etp for INT219");
})

app.listen(port,() =>{
    console.log(`Server is listening at port ${port}`)
})
const express = require('express');
const app = express();
const path = require('path');
const port = 6000;

app.get('/download', (req,res) => {
    const fName = 'file.txt';
    const pathName = path.join(__dirname,'new',fName);
    res.download(pathName,fName,(err)=>{
        if(err){
            console.log("Error downloading the file: ",err);
        }
    });
});

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

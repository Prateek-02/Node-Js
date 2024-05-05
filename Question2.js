const fs = require('fs');

const dirPath = "./new";

fs.mkdir(dirPath,(err) => {
    if(err){
        console.log("Error creating the directory ",err);
    }
    else{
        console.log("Directory created");
    }
})
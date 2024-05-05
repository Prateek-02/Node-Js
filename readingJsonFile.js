const fs = require("fs");

// Parse Json file and print the data on console
fs.readFile('read.json','utf-8',(err,data)=>{
    if(err){
        console.log("Error parsing the file: ",err);
    }
    else{
        const z = JSON.parse(data);
        console.log(z);
    }
})



/*
fs.readFile('read.json', 'utf-8', (err,data) =>{
    if(err){
        console.log("Error reading file: ",err);
        return;
    }
    try{
        const b = JSON.parse(data);
        console.log(b);
    }
    catch(error){
        console.log("Error parsing the file: ",err);
    }
})
*/

// reading Json file synchronously
const b = fs.readFileSync('read.json');
console.log(b.toString());
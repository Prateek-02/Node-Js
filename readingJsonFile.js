const fs = require("fs");

// Synchrously
try {
    const data = fs.readFileSync('read.json', 'utf-8');
    const parsedData = JSON.parse(data);
    console.log(parsedData);
} 
catch (err) {
    console.error("Error reading or parsing the file:", err);
}



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


fs.readFile('read.json','utf-8',(err,data) => {
    if(err){
        console.log("Error reading the file: "+err);
    }
    else{
        console.log(data);
    }
})

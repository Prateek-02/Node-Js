const fs = require("fs");

/*
fs.readFile('file.txt','utf-8', (err,data)=>{
    // console.log(err,data);
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
*/

const a = fs.readFileSync('file.txt');
console.log(a.toString());


/*
fs.writeFile('file2.txt',"This is file 2", () =>{
    console.log("Written to the file");
}) 
*/

const b = fs.writeFileSync("file2.txt","This is a new file");
console.log("Finished reading file");
const fs = require('fs');

const data = "this is a sample text file that we will be replaced using this writefile method";
fs.writeFile('file.txt', data, (err) => {
    try{
        if(err) throw err;
        console.log('File saved!');
    }
    catch(err){
        console.log(err);
    }
});
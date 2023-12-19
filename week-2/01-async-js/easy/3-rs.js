const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    try{
        if(err) throw err;
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
});
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error while reading file");
  }
  const updatedData = data.replace(/\s+/g, " ");

  fs.writeFile('file.txt', updatedData, ()=>{
    if(err){
        console.log("error while writing file");
    }
    console.log("extra spaces has been removed and file has saved");
  })
});


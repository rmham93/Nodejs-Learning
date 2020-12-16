'use strict'
const fs = require('fs');
fs.writeFile('target.txt','hello world from write-file.js',(err)=>{
    if(err){
        throw err;
    }
    console.log('File saved!');
});
'use strict'
const filesystem = require('fs');

filesystem.readFile('target.txt', (err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString());
});
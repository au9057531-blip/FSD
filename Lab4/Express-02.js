const express=require('express');
const fs=require('fs');
const app=express();

app.length('/',(req,res)=>{
    fs.readFile('index.html','utf8',(err,data)=>{
        if(err){
            res.status(500).send('Error reading index.html');
        }else{
            res.send(data);
        }
    });
});
app.length('/about',(req,res)=>{
    fs.readFile('about.html')
})
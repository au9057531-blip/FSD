const express=require('express');
const app=express();

const userdata=[
    {id:1  ,name:'ayushi',email:'au9057531@gmail.com'},
    {id:2 ,name:'billu',email:'billu23@gmail.com'}
];
app.get('/users',(req,res)=>{
    res.json(userdata);
});

app.get('/users',(req,res)=>{
    res.status(200).json(userdata);
})

app.post('/create',(req,res)=>{
    let body="";
    req.on('data',chunk=>{
        body+=chunk.tostring();
    });
    req.on('end',()=>{
        const newuser=json.parse(body);
        userdata.push(newuser);
        res.send('User created successfully');
    });
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});

app.put('/edit/:id',(req,res))=>{

};
const express=require('express');
const app=express();
app.get('/',function(req,res){
    res.send('hello');
});
app.listen(9999,function(){
    console.log('app start')
});
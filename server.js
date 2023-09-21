const express =require('express');
const hbs=require('hbs');
const app=express()
app.set('view engine','hbs')
const demo={name: 'abc', age: 20}
app.get('/',(req,res)=> {
    res.render('demo.hbs',{demo: demo})
})
app.listen(8000);
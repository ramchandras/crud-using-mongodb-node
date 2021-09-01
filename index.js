 const express =require('express')
 const mongoose=require('mongoose')
const url='mongodb://localhost/aliens'


 const app=express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json()) 

const alienRouter=require('./route/aliens')
app.use('/aliens',alienRouter)


app.listen(3000,()=>{
    console.log('Server started')
})
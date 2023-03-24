const express = require('express')

const app = express()

// http://localhost:3000/hello
app.get('/hello', (req,res)=>{
    res.send('hello World')
})  



app.listen(3000,()=>{
    console.log('Server started at http://localhost:3000')
})



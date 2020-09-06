const express = require('express')

const app = express()

app.get('/users', (req,res) =>{
    let teste = req.params
    teste = "save"

    console.log(req)
    return res.send({"message": teste})
})

app.post('/users', (req,res) =>{

})

app.put('/users/:id', (req,res)=>{

})



app.get('/animes', (req,res)=>{
    
})

app.post('/animes', (req,res)=>{

})

app.listen(3333)
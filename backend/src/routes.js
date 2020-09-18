const express = require('express')

// Controllers
import User from './controllers/users'


const { Router } = express
const router = Router()


const animes = [
    {
        title:"Shingeki no Kyojin", 
        episodes:"60",
        comment:"A very good anime",
        genre:"shounen",
        tags:[
            "shounen",
            "harem",
            "titans"
        ],
        rate:5
    },
    {
        title:"Shingeki no Kyojin2", 
        episodes:"60",
        comment:"A very good anime",
        genre:"shounen",
        tags:[
            "shounen",
            "harem",
            "titans"
        ],
        rate:5
    },
    {
        title:"Shingeki no Kyojin3", 
        episodes:"60",
        comment:"A very good anime",
        genre:"shounen",
        tags:[
            "shounen",
            "harem",
            "titans"
        ],
        rate:5
    },
] 

router.get('/users', User.list)

router.post('/users', User.create)

router.put('/users/:id', (req,res)=>{
})

router.get('/animes', (req,res)=>{
    return res.send({animes})
})

router.post('/animes', (req,res)=>{
    let {title, episodes, comment, genre, tags, rate} = req.body
    let obj = {title, episodes, comment, genre, tags, rate}
    let ward = false


    animes.map((item, i)=>{
        item.title === title ? ward = true : null
    })

    ward === false ? animes.push(obj) : res.send({error:"Anime already exists"})

    return res.json(animes)
})

export default router
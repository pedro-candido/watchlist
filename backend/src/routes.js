const express = require('express')

// Controllers
import User from './controllers/users'
import Anime from './controllers/animes'
import Auth from './controllers/auth'


const { Router } = express
const router = Router()


const animes = [
   {
      title: "Shingeki no Kyojin",
      episodes: "60",
      comment: "A very good anime",
      genre: "shounen",
      tags: [
         "shounen",
         "harem",
         "titans"
      ],
      rate: 5
   },
   {
      title: "Shingeki no Kyojin2",
      episodes: "60",
      comment: "A very good anime",
      genre: "shounen",
      tags: [
         "shounen",
         "harem",
         "titans"
      ],
      rate: 5
   },
   {
      title: "Shingeki no Kyojin3",
      episodes: "60",
      comment: "A very good anime",
      genre: "shounen",
      tags: [
         "shounen",
         "harem",
         "titans"
      ],
      rate: 5
   },
]

router.post('/token', Auth.getToken)

router.get('/users', User.list)

router.post('/users', User.create)

// router.put('/users/:id', (req, res) => {
// })

router.get('/animes', Anime.list)

router.post('/animes', Anime.create)

export default router
const express = require('express')

// Controllers
import User from './controllers/users'
import Anime from './controllers/animes'
import Auth from './controllers/auth'


const { Router } = express
const router = Router()

router.post('/token', Auth.getToken)

router.get('/users', User.list)

router.post('/users', User.create)

// router.put('/users/:id', (req, res) => {
// })

router.get('/animes', Anime.list)

router.post('/animes', Anime.create)

export default router
import Anime from '../models/Anime'

export default {
   async list(req, res) {
      const animes = await Anime.findAll({
         attributes: ['title', 'season', 'episodes', 'comment', 'tags', 'rate']
      })

      return res.status(200).json(animes)
   },

   async get(req, res) {

   },

   async create(req, res) {
      const { title, season, episodes, genre, comment, tags, rate } = req.body

      try {
         const anime = await Anime.create({
            title, season, episodes, genre, comment, tags, rate
         })
         return res.status(201).json(anime)

      }
      catch(err){
         console.log(err)
         return res.status(400).json({message:err.message})
      }

   },

   async update(req, res) {

   }

}
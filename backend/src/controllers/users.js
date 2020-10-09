import User from '../models/User'

import bcrypt from 'bcryptjs'

export default {
   async list(req, res) {
      const users = await User.findAll({
         attributes: ['email', 'username', 'fullName', 'sex', 'interest']
      })

      console.log(users)

      return res.json(users)
   },
   get(req, res) {
   },
   async create(req, res) {
      const { password } = req.body

      const hash = bcrypt.hashSync(password, 8)
      try {
         const user = await User.create(
            { ...req.body, password: hash }
         )
         const { email, fullName, username, sex, interest } = user

         return res.json({ email, fullName, username, sex, interest })

      }
      catch (err) {
         console.log(err)
      }

   },
   update(req, res) {
      // try{

      // }
      // catch(err){
      //     console.log(err)
      // }
   }
}
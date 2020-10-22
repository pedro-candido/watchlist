import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User'

const secret = 'pamonha'

export default {
    async getToken(req, res) {
        const { username, password } = req.body
        console.log(username, password)

        const user = await User.findOne({
            where: {
                username: username,
            }
        })

        console.log(user?.username)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (bcrypt.compareSync(password, user.password)) {
            // Utilizar o jwt.sign passando o payload como primeiro parâmetro e uma string(hash)
            const token = jwt.sign({ identity: user.id }, secret)
            res.status(200).json({ token: token })
        }
        else {
            return res.status(401).json({ message: "Senha inválida" })
        }
    }
}
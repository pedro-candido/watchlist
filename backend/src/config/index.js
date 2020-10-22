import { Sequelize } from 'sequelize'
import database from './database'

const sequelize = new Sequelize(
    database
)

export default sequelize
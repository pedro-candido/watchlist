import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../config/database'

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fullName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex:{
        type: DataTypes.STRING,
        allowNull: false
    },
    interest:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
},{freezeTableName: true})

export default User
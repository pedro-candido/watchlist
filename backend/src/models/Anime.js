import { DataTypes } from 'sequelize'

import sequelize from '../config/database'

const Anime = sequelize.define('Anime', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        comment:"Nome do anime"
    },
    season:{
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:"Quantidade de temporadas que o anime tem"
    },
    episodes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:"Número de episódios"
    },
    comment:{
        type: DataTypes.STRING,
        allowNull: true,
        comment:"Observação sobre o anime"
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false,
        comment:"O gênero do anime"
    },
    tags:{
        type: DataTypes.STRING,
        allowNull: true,
        comment: "Tags dos animes, separadas por vírgulas, podem ser referências aos animes, como gêneros"
    },
    rate:{
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:"Nota de 1 até 5"
    },
})

// console.log(Anime === sequelize.models.Anime)
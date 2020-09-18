// import { DataTypes } from 'sequelize'

'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Anime', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                comment: "Nome do anime"
            },
            season: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                comment: "Quantidade de temporadas que o anime tem"
            },
            episodes: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                comment: "Número de episódios"
            },
            comment: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
                comment: "Observação sobre o anime"
            },
            genre: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                comment: "O gênero do anime"
            },
            tags: {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
                comment: "Tags dos animes, separadas por vírgulas, podem ser referências aos animes, como gêneros"
            },
            rate: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                comment: "Nota de 1 até 5"
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Anime')
    }
};

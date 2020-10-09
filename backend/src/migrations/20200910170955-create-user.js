'use strict';

module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('User', {
         id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         email: {
            type: Sequelize.DataTypes.STRING,
            unique: true,
            allowNull: false
         },
         fullName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
         },
         username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            unique: true
         },
         password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
         },
         sex: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
         },
         interest: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
         },
         createdAt: Sequelize.DATE,
         updatedAt: Sequelize.DATE
      })
   },

   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('User')
   }
};

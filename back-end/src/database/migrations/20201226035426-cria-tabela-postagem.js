'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("postagens",{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("postagens");
  }
};

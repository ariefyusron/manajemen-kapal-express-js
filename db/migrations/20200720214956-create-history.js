module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Histories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    total: {
      type: Sequelize.INTEGER
    },
    id_kapal: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Kapals',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Histories')
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('HistoryPekerjaanRabs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_kapal: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Kapals',
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING
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
  down: (queryInterface) => queryInterface.dropTable('HistoryPekerjaanRabs')
};

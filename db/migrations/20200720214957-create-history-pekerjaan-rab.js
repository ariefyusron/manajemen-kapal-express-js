module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('HistoryPekerjaanRabs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_history: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Histories',
        key: 'id'
      }
    },
    id_kapal: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Kapals',
        key: 'id'
      }
    },
    id_pekerjaan: {
      type: Sequelize.INTEGER
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

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PekerjaanRabs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    id_kapal: {
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
  down: (queryInterface) => queryInterface.dropTable('PekerjaanRabs')
};

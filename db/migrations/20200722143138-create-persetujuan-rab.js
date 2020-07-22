module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PersetujuanRabs', {
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
    dok: {
      type: Sequelize.INTEGER
    },
    floating: {
      type: Sequelize.INTEGER
    },
    pertama: {
      type: Sequelize.STRING
    },
    kedua: {
      type: Sequelize.STRING
    },
    ketiga: {
      type: Sequelize.STRING
    },
    keempat: {
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
  down: (queryInterface) => queryInterface.dropTable('PersetujuanRabs')
};

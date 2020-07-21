module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('StandarTarifs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    jam_orang: {
      type: Sequelize.INTEGER
    },
    dps: {
      type: Sequelize.INTEGER
    },
    sub_kont: {
      type: Sequelize.INTEGER
    },
    peralatan: {
      type: Sequelize.INTEGER
    },
    material: {
      type: Sequelize.INTEGER
    },
    material_bantu: {
      type: Sequelize.INTEGER
    },
    overhead: {
      type: Sequelize.INTEGER
    },
    total_hpp: {
      type: Sequelize.INTEGER
    },
    standar_tarif: {
      type: Sequelize.INTEGER
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
  down: (queryInterface) => queryInterface.dropTable('StandarTarifs')
};

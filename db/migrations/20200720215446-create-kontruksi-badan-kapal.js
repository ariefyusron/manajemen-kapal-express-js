module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('KontruksiBadanKapals', {
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
    nama_pekerjaan: {
      type: Sequelize.STRING
    },
    volume: {
      type: Sequelize.INTEGER
    },
    satuan: {
      type: Sequelize.STRING
    },
    dps: {
      type: Sequelize.INTEGER
    },
    sub_kont: {
      type: Sequelize.INTEGER
    },
    jasa_peralatan: {
      type: Sequelize.INTEGER
    },
    material: {
      type: Sequelize.INTEGER
    },
    material_bantu: {
      type: Sequelize.INTEGER
    },
    total: {
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
  down: (queryInterface) => queryInterface.dropTable('KontruksiBadanKapals')
};

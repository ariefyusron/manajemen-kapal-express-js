module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('KapalTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    kapal_id: {
      type: Sequelize.INTEGER,
      unique: true,
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
  down: (queryInterface) => queryInterface.dropTable('KapalTypes')
};

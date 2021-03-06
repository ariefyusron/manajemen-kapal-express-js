module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Kapals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    kapal_type: {
      type: Sequelize.INTEGER,
      references: {
        model: 'KapalTypes',
        key: 'id'
      }
    },
    length_oa: {
      type: Sequelize.INTEGER
    },
    length_pp: {
      type: Sequelize.INTEGER
    },
    breadth: {
      type: Sequelize.INTEGER
    },
    depth: {
      type: Sequelize.INTEGER
    },
    draft: {
      type: Sequelize.INTEGER
    },
    gross_tonnage: {
      type: Sequelize.INTEGER
    },
    class: {
      type: Sequelize.STRING
    },
    tahun: {
      type: Sequelize.STRING
    },
    survey_type: {
      type: Sequelize.INTEGER,
      references: {
        model: 'SurveyTypes',
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
    },
    is_delete: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Kapals')
};

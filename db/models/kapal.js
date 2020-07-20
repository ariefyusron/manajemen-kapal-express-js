module.exports = (sequelize, DataTypes) => {
  const Kapal = sequelize.define('Kapal', {
    name: DataTypes.STRING,
    kapal_type: DataTypes.INTEGER,
    length_oa: DataTypes.INTEGER,
    length_pp: DataTypes.INTEGER,
    breadth: DataTypes.INTEGER,
    depth: DataTypes.INTEGER,
    draft: DataTypes.INTEGER,
    gross_tonnage: DataTypes.INTEGER,
    class: DataTypes.STRING,
    survey_type: DataTypes.INTEGER,
    is_delete: DataTypes.BOOLEAN
  }, {});
  Kapal.associate = (models) => {
    // associations can be defined here
    Kapal.belongsTo(models.KapalType, {
      foreignKey: 'kapal_type'
    });

    Kapal.belongsTo(models.SurveyType, {
      foreignKey: 'survey_type'
    });
  };
  return Kapal;
};

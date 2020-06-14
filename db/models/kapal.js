module.exports = (sequelize, DataTypes) => {
  const Kapal = sequelize.define('Kapal', {
    name: DataTypes.STRING,
    kapal_type: DataTypes.STRING,
    length_oa: DataTypes.INTEGER,
    length_pp: DataTypes.INTEGER,
    breadth: DataTypes.INTEGER,
    depth: DataTypes.INTEGER,
    draft: DataTypes.INTEGER,
    gross_tonnage: DataTypes.INTEGER,
    class: DataTypes.STRING,
    survey_type: DataTypes.STRING
  }, {});
  Kapal.associate = (models) => {
    // associations can be defined here
    Kapal.hasOne(models.KapalType, {
      foreignKey: 'kapal_id'
    });

    Kapal.hasOne(models.SurveyType, {
      foreignKey: 'kapal_id'
    });
  };
  return Kapal;
};

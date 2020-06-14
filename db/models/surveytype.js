module.exports = (sequelize, DataTypes) => {
  const SurveyType = sequelize.define('SurveyType', {
    kapal_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  SurveyType.associate = (models) => {
    // associations can be defined here
    SurveyType.belongsTo(models.Kapal, {
      foreignKey: 'kapal_id'
    });
  };
  return SurveyType;
};

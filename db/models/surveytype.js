module.exports = (sequelize, DataTypes) => {
  const SurveyType = sequelize.define('SurveyType', {
    name: DataTypes.STRING
  }, {});
  SurveyType.associate = (models) => {
    // associations can be defined here
    SurveyType.hasOne(models.SurveyType, {
      foreignKey: 'survey_type'
    });
  };
  return SurveyType;
};

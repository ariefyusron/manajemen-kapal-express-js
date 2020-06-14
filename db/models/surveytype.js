module.exports = (sequelize, DataTypes) => {
  const SurveyType = sequelize.define('SurveyType', {
    name: DataTypes.STRING
  }, {});
  SurveyType.associate = () => {
    // associations can be defined here
  };
  return SurveyType;
};

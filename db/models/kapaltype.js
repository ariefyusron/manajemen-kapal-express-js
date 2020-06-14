module.exports = (sequelize, DataTypes) => {
  const KapalType = sequelize.define('KapalType', {
    name: DataTypes.STRING
  }, {});
  KapalType.associate = () => {
    // associations can be defined here
  };
  return KapalType;
};

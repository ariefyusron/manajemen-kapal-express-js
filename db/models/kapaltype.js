module.exports = (sequelize, DataTypes) => {
  const KapalType = sequelize.define('KapalType', {
    name: DataTypes.STRING
  }, {});
  KapalType.associate = (models) => {
    // associations can be defined here
    KapalType.hasOne(models.KapalType, {
      foreignKey: 'kapal_type'
    });
  };
  return KapalType;
};

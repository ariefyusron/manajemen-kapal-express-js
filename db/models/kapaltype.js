module.exports = (sequelize, DataTypes) => {
  const KapalType = sequelize.define('KapalType', {
    kapal_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  KapalType.associate = (models) => {
    // associations can be defined here
    KapalType.belongsTo(models.Kapal, {
      foreignKey: 'kapal_id'
    });
  };
  return KapalType;
};

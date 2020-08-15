module.exports = (sequelize, DataTypes) => {
  const PekerjaanRab = sequelize.define('PekerjaanRab', {
    id_kapal: DataTypes.INTEGER,
    name: DataTypes.STRING,
    is_save: DataTypes.BOOLEAN
  }, {});
  PekerjaanRab.associate = (models) => {
    // associations can be defined here
    PekerjaanRab.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return PekerjaanRab;
};

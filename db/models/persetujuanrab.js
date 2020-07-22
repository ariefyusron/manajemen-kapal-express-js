module.exports = (sequelize, DataTypes) => {
  const PersetujuanRab = sequelize.define('PersetujuanRab', {
    id_kapal: DataTypes.INTEGER,
    dok: DataTypes.INTEGER,
    floating: DataTypes.INTEGER,
    pertama: DataTypes.STRING,
    kedua: DataTypes.STRING,
    ketiga: DataTypes.STRING,
    keempat: DataTypes.STRING
  }, {});
  PersetujuanRab.associate = (models) => {
    // associations can be defined here
    PersetujuanRab.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return PersetujuanRab;
};

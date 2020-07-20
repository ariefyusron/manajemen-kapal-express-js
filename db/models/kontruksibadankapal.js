module.exports = (sequelize, DataTypes) => {
  const KontruksiBadanKapal = sequelize.define('KontruksiBadanKapal', {
    id_kapal: DataTypes.INTEGER,
    volume: DataTypes.INTEGER,
    satuan: DataTypes.STRING,
    dps: DataTypes.INTEGER,
    sub_kont: DataTypes.INTEGER,
    jasa_peralatan: DataTypes.INTEGER,
    material: DataTypes.INTEGER,
    material_bantu: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  KontruksiBadanKapal.associate = (models) => {
    // associations can be defined here
    KontruksiBadanKapal.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return KontruksiBadanKapal;
};

module.exports = (sequelize, DataTypes) => {
  const Pengedokan = sequelize.define('Pengedokan', {
    id_kapal: DataTypes.INTEGER,
    nama_pekerjaan: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    satuan: DataTypes.STRING,
    dps: DataTypes.INTEGER,
    sub_kont: DataTypes.INTEGER,
    jasa_peralatan: DataTypes.INTEGER,
    material: DataTypes.INTEGER,
    material_bantu: DataTypes.INTEGER,
    overhead: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  Pengedokan.associate = (models) => {
    // associations can be defined here
    Pengedokan.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return Pengedokan;
};

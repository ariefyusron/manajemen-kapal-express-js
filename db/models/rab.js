module.exports = (sequelize, DataTypes) => {
  const Rab = sequelize.define('Rab', {
    id_kapal: DataTypes.INTEGER,
    id_pekerjaan: DataTypes.INTEGER,
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
  Rab.associate = (models) => {
    // associations can be defined here
    Rab.belongsTo(models.PekerjaanRab, {
      foreignKey: 'id_pekerjaan'
    });
  };
  return Rab;
};

module.exports = (sequelize, DataTypes) => {
  const PelayananUmum = sequelize.define('PelayananUmum', {
    id_kapal: DataTypes.INTEGER,
    nama_pekerjaan: DataTypes.STRING,
    volume: DataTypes.INTEGER,
    satuan: DataTypes.STRING,
    dps: DataTypes.INTEGER,
    sub_kont: DataTypes.INTEGER,
    jasa_peralatan: DataTypes.INTEGER,
    material: DataTypes.INTEGER,
    material_bantu: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {});
  PelayananUmum.associate = (models) => {
    // associations can be defined here
    PelayananUmum.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return PelayananUmum;
};

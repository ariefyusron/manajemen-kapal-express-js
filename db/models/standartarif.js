module.exports = (sequelize, DataTypes) => {
  const StandarTarif = sequelize.define('StandarTarif', {
    id_pekerjaan: DataTypes.INTEGER,
    item_pekerjaan: DataTypes.STRING,
    jam_orang: DataTypes.INTEGER,
    dps: DataTypes.INTEGER,
    sub_kont: DataTypes.INTEGER,
    peralatan: DataTypes.INTEGER,
    material: DataTypes.INTEGER,
    material_bantu: DataTypes.INTEGER,
    overhead: DataTypes.INTEGER,
    total_hpp: DataTypes.INTEGER,
    standar_tarif: DataTypes.INTEGER
  }, {});
  StandarTarif.associate = (models) => {
    // associations can be defined here
    StandarTarif.belongsTo(models.PekerjaanStandarTarif, {
      foreignKey: 'id_pekerjaan'
    });
  };
  return StandarTarif;
};

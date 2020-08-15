module.exports = (sequelize, DataTypes) => {
  const HistoryRab = sequelize.define('HistoryRab', {
    id_history: DataTypes.INTEGER,
    id_kapal: DataTypes.INTEGER,
    id_history_pekerjaan: DataTypes.INTEGER,
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
  HistoryRab.associate = (models) => {
    // associations can be defined here
    HistoryRab.belongsTo(models.HistoryPekerjaanRab, {
      foreignKey: 'id_history_pekerjaan'
    });

    HistoryRab.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });

    HistoryRab.belongsTo(models.History, {
      foreignKey: 'id_history'
    });
  };
  return HistoryRab;
};

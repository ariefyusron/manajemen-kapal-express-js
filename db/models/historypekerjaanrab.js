module.exports = (sequelize, DataTypes) => {
  const HistoryPekerjaanRab = sequelize.define('HistoryPekerjaanRab', {
    id_history: DataTypes.INTEGER,
    id_kapal: DataTypes.INTEGER,
    id_pekerjaan: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  HistoryPekerjaanRab.associate = (models) => {
    // associations can be defined here
    HistoryPekerjaanRab.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });

    HistoryPekerjaanRab.belongsTo(models.History, {
      foreignKey: 'id_history'
    });
  };
  return HistoryPekerjaanRab;
};

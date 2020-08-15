module.exports = (sequelize, DataTypes) => {
  const HistoryPekerjaanRab = sequelize.define('HistoryPekerjaanRab', {
    id_kapal: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  HistoryPekerjaanRab.associate = (models) => {
    // associations can be defined here
    HistoryPekerjaanRab.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return HistoryPekerjaanRab;
};

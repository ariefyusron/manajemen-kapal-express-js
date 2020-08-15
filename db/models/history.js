module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    total: DataTypes.INTEGER,
    id_kapal: DataTypes.INTEGER
  }, {});
  History.associate = (models) => {
    // associations can be defined here
    History.belongsTo(models.Kapal, {
      foreignKey: 'id_kapal'
    });
  };
  return History;
};

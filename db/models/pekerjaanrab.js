module.exports = (sequelize, DataTypes) => {
  const PekerjaanRab = sequelize.define('PekerjaanRab', {
    id_kapal: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  PekerjaanRab.associate = () => {
    // associations can be defined here
  };
  return PekerjaanRab;
};

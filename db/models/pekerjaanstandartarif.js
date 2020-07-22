module.exports = (sequelize, DataTypes) => {
  const PekerjaanStandarTarif = sequelize.define('PekerjaanStandarTarif', {
    name: DataTypes.STRING
  }, {});
  PekerjaanStandarTarif.associate = () => {
    // associations can be defined here
  };
  return PekerjaanStandarTarif;
};

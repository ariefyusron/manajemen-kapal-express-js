module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    is_admin: DataTypes.BOOLEAN
  }, {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};

const models = require('../db/models');

exports.createUser = async (req, res) => {
  try {
    const storeUser = await models.User.create(req.body);
    res.json(storeUser);
  }
  catch (e) {
    res.status(400).json({ message: 'Username is already' });
  }
};

exports.login = async (req, res) => {
  const showUser = await models.User.findOne({
    where: {
      username: req.body.username
    }
  });
  if (!showUser) {
    res.status(401).json({ message: 'Username unvailable' });
  }
  else {
    const compare = req.bcrypt.compareSync(req.body.password || '', showUser.password);
    if (!compare) {
      res.status(401).json({ message: 'Password invalid' });
    }
    else {
      const token = req.jwt.sign({ showUser }, req.secretKey);
      res.json({
        is_admin: showUser.is_admin,
        token
      });
    }
  }
};

exports.getUser = async (req, res) => {
  const listUser = await models.User.findAll({
    attributes: ['id', 'username', 'is_admin'],
    order: [['createdAt', 'DESC']]
  });
  res.json(listUser);
};

exports.deleteUser = async (req, res) => {
  const result = await models.User.destroy({
    where: {
      id: req.params.id
    }
  });
  if (result) {
    res.json({ message: 'Deleted' });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

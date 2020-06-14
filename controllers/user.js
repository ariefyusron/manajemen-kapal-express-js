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

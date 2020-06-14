const models = require('../db/models');

exports.createType = async (req, res) => {
  if (req.body.name) {
    const result = await models.KapalType.create(req.body);
    res.json(result);
  }
  else {
    res.status(400).json({ message: 'Name is required' });
  }
};

exports.updateType = (req, res) => {
  res.json({ title: 'ini update Type' });
};

exports.deleteType = (req, res) => {
  res.json({ title: 'ini delete Type' });
};

exports.getType = (req, res) => {
  res.json({ title: 'ini get Type' });
};

exports.getByIdType = (req, res) => {
  res.json({ title: 'ini detail Type' });
};

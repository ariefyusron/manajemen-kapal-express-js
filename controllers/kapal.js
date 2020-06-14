const models = require('../db/models');

exports.createKapal = async (req, res) => {
  const result = await models.Kapal.create(req.body);
  res.json(result);
};

exports.updateKapal = (req, res) => {
  res.json({ title: 'ini update kapal' });
};

exports.deleteKapal = (req, res) => {
  res.json({ title: 'ini delete kapal' });
};

exports.getKapal = async (req, res) => {
  const result = await models.Kapal.findAll();
  res.json(result);
};

exports.getByIdKapal = async (req, res) => {
  const result = await models.Kapal.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

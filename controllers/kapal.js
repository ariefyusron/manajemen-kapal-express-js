const models = require('../db/models');

exports.createKapal = async (req, res) => {
  const result = await models.Kapal.create(req.body);
  res.json(result);
};

exports.updateKapal = async (req, res) => {
  const result = await models.Kapal.update(req.body, { where: { id: req.params.id, is_delete: 0 } });
  if (result[0]) {
    res.json({ message: 'Updated' });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deleteKapal = async (req, res) => {
  const result = await models.Kapal.update({ is_delete: 1 }, { where: { id: req.params.id, is_delete: 0 } });
  if (result[0]) {
    res.json({ message: 'Deleted' });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.getKapal = async (req, res) => {
  const result = await models.Kapal.findAll({ where: { is_delete: 0 }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdKapal = async (req, res) => {
  const result = await models.Kapal.findOne({ where: { id: req.params.id, is_delete: 0 } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

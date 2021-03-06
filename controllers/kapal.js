const models = require('../db/models');

exports.createKapal = async (req, res) => {
  const result = await models.Kapal.create(req.body);
  await models.PersetujuanRab.create({
    id_kapal: result.id, dok: 0, floating: 0, pertama: '', kedua: '', ketiga: '', keempat: ''
  });
  res.json(result);
};

exports.updateKapal = async (req, res) => {
  const result = await models.Kapal.update(req.body, { where: { id: req.params.id, is_delete: 0 } });
  if (result[0]) {
    res.json({ id: req.params.id, ...req.body });
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
  const result = await models.Kapal.findAll({ include: [{ model: models.KapalType }, { model: models.SurveyType }], where: { is_delete: 0 }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdKapal = async (req, res) => {
  const result = await models.Kapal.findOne({ include: [{ model: models.KapalType }, { model: models.SurveyType }], where: { id: req.params.id, is_delete: 0 } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

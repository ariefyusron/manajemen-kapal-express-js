const models = require('../db/models');

exports.update = async (req, res) => {
  const result = await models.PersetujuanRab.update(req.body, { where: { id_kapal: req.params.idKapal } });
  if (result[0]) {
    res.json({ id_kapal: req.params.idKapal, ...req.body });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.get = async (req, res) => {
  const result = await models.PersetujuanRab.findOne({ where: { id_kapal: req.params.idKapal } });
  res.json(result);
};

const models = require('../db/models');

exports.update = async (req, res) => {
  const result = await models.PersetujuanRab.update({ ...req.body, dok: req.body.dok === '' ? 0 : req.body.dok, floating: req.body.floating === '' ? 0 : req.body.floating }, { where: { id_kapal: req.params.idKapal } });
  if (result[0]) {
    res.json({
      id_kapal: req.params.idKapal, ...req.body, dok: req.body.dok === '' ? 0 : req.body.dok, floating: req.body.floating === '' ? 0 : req.body.floating
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.get = async (req, res) => {
  const result = await models.PersetujuanRab.findOne({ where: { id_kapal: req.params.idKapal } });
  res.json(result);
};

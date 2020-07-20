const models = require('../db/models');

exports.createKontruksiBadanKapal = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;

  const result = await models.KontruksiBadanKapal.create({ ...req.body, total });
  res.json(result);
};

exports.updateKontruksiBadanKapal = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;
  const result = await models.KontruksiBadanKapal.update({ ...req.body, total }, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({ id: req.params.id, ...req.body, total });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deleteKontruksiBadanKapal = async (req, res) => {
  const result = await models.KontruksiBadanKapal.destroy({
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

exports.getKontruksiBadanKapal = async (req, res) => {
  const result = await models.KontruksiBadanKapal.findAll({ order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdKontruksiBadanKapal = async (req, res) => {
  const result = await models.KontruksiBadanKapal.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

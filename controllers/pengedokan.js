const models = require('../db/models');

exports.createPengedokan = async (req, res) => {
  // eslint-disable-next-line radix
  const total = parseInt(req.body.dps) + parseInt(req.body.sub_kont) + parseInt(req.body.jasa_peralatan) + parseInt(req.body.material) + parseInt(req.body.material_bantu) + parseInt(req.body.overhead);

  const result = await models.Pengedokan.create({ ...req.body, id_kapal: req.params.idKapal, total });
  res.json(result);
};

exports.updatePengedokan = async (req, res) => {
  // eslint-disable-next-line radix
  const total = parseInt(req.body.dps) + parseInt(req.body.sub_kont) + parseInt(req.body.jasa_peralatan) + parseInt(req.body.material) + parseInt(req.body.material_bantu) + parseInt(req.body.overhead);
  const result = await models.Pengedokan.update({ ...req.body, total }, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({ id: req.params.id, ...req.body, total });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deletePengedokan = async (req, res) => {
  const result = await models.Pengedokan.destroy({
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

exports.getPengedokan = async (req, res) => {
  const result = await models.Pengedokan.findAll({ where: { id_kapal: req.params.idKapal }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdPengedokan = async (req, res) => {
  const result = await models.Pengedokan.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

const models = require('../db/models');

exports.createPengedokan = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;

  const result = await models.Pengedokan.create({ ...req.body, total });
  res.json(result);
};

exports.updatePengedokan = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;
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
  const result = await models.Pengedokan.findAll({ order: [['createdAt', 'DESC']] });
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

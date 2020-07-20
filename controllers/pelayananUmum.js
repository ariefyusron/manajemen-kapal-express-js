const models = require('../db/models');

exports.createPelayananUmum = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;

  const result = await models.PelayananUmum.create({ ...req.body, total });
  res.json(result);
};

exports.updatePelayananUmum = async (req, res) => {
  const total = req.body.dps + req.body.sub_kont + req.body.jasa_peralatan + req.body.material + req.body.material_bantu;
  const result = await models.PelayananUmum.update({ ...req.body, total }, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({ id: req.params.id, ...req.body, total });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deletePelayananUmum = async (req, res) => {
  const result = await models.PelayananUmum.destroy({
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

exports.getPelayananUmum = async (req, res) => {
  const result = await models.PelayananUmum.findAll({ order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdPelayananUmum = async (req, res) => {
  const result = await models.PelayananUmum.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

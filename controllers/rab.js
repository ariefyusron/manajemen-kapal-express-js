const models = require('../db/models');

exports.createRab = async (req, res) => {
  const dps = req.body.dps === '' ? 0 : parseInt(req.body.dps, 10);
  const subKont = req.body.sub_kont === '' ? 0 : parseInt(req.body.sub_kont, 10);
  const jasaPeralatan = req.body.jasa_peralatan === '' ? 0 : parseInt(req.body.jasa_peralatan, 10);
  const material = req.body.material === '' ? 0 : parseInt(req.body.material, 10);
  const materialBantu = req.body.material_bantu === '' ? 0 : parseInt(req.body.material_bantu, 10);
  const overhead = req.body.overhead === '' ? 0 : parseInt(req.body.overhead, 10);
  const total = dps + subKont + jasaPeralatan + material + materialBantu + overhead;

  const result = await models.Rab.create({
    id_pekerjaan: req.body.id_pekerjaan, id_kapal: req.params.idKapal, dps, sub_kont: subKont, jasa_peralatan: jasaPeralatan, material, material_bantu: materialBantu, overhead, total
  });
  res.json(result);
};

exports.updateRab = async (req, res) => {
  const dps = req.body.dps === '' ? 0 : parseInt(req.body.dps, 10);
  const subKont = req.body.sub_kont === '' ? 0 : parseInt(req.body.sub_kont, 10);
  const jasaPeralatan = req.body.jasa_peralatan === '' ? 0 : parseInt(req.body.jasa_peralatan, 10);
  const material = req.body.material === '' ? 0 : parseInt(req.body.material, 10);
  const materialBantu = req.body.material_bantu === '' ? 0 : parseInt(req.body.material_bantu, 10);
  const overhead = req.body.overhead === '' ? 0 : parseInt(req.body.overhead, 10);
  const total = dps + subKont + jasaPeralatan + material + materialBantu + overhead;

  const result = await models.Rab.update({
    id_pekerjaan: req.body.id_pekerjaan, dps, sub_kont: subKont, jasa_peralatan: jasaPeralatan, material, material_bantu: materialBantu, overhead, total
  }, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({
      id: req.params.id, id_pekerjaan: req.body.id_pekerjaan, dps, sub_kont: subKont, jasa_peralatan: jasaPeralatan, material, material_bantu: materialBantu, overhead, total
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deleteRab = async (req, res) => {
  const result = await models.Rab.destroy({
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

exports.getRab = async (req, res) => {
  const result = await models.Rab.findAll({ where: { id_kapal: req.params.idKapal }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdRab = async (req, res) => {
  const result = await models.Rab.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

// type pekerjaan
exports.createPekerjaan = async (req, res) => {
  const result = await models.PekerjaanRab.create({ ...req.body, id_kapal: req.params.idKapal });
  res.json(result);
};

exports.deletePekerjaan = async (req, res) => {
  await models.Rab.destroy({
    where: {
      id_pekerjaan: req.params.id
    }
  });

  const result = await models.PekerjaanRab.destroy({
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

exports.updatePekerjaan = async (req, res) => {
  const result = await models.PekerjaanRab.update(req.body, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({
      id: req.params.id, ...req.body
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.getPekerjaan = async (req, res) => {
  const result = await models.PekerjaanRab.findAll({ where: { id_kapal: req.params.idKapal } });
  res.json(result);
};

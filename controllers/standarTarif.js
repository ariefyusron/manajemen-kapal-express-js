const models = require('../db/models');

exports.createStandarTarif = async (req, res) => {
  const jamOrang = req.body.jam_orang === '' ? 0 : parseInt(req.body.jam_orang, 10);
  const dps = req.body.dps === '' ? 0 : parseInt(req.body.dps, 10);
  const subKont = req.body.sub_kont === '' ? 0 : parseInt(req.body.sub_kont, 10);
  const peralatan = req.body.peralatan === '' ? 0 : parseInt(req.body.peralatan, 10);
  const material = req.body.material === '' ? 0 : parseInt(req.body.material, 10);
  const materialBantu = req.body.material_bantu === '' ? 0 : parseInt(req.body.material_bantu, 10);
  const overhead = req.body.overhead === '' ? 0 : parseInt(req.body.overhead, 10);
  const totalHpp = dps + subKont + peralatan + material + materialBantu + overhead;
  const standarTarif = req.body.standar_tarif === '' ? 0 : parseInt(req.body.standar_tarif, 10);

  const result = await models.StandarTarif.create({
    item_pekerjaan: req.body.item_pekerjaan, jam_orang: jamOrang, dps, sub_kont: subKont, peralatan, material, material_bantu: materialBantu, overhead, total_hpp: totalHpp, standar_tarif: standarTarif
  });
  res.json(result);
};

exports.updateStandarTarif = async (req, res) => {
  const jamOrang = req.body.jam_orang === '' ? 0 : parseInt(req.body.jam_orang, 10);
  const dps = req.body.dps === '' ? 0 : parseInt(req.body.dps, 10);
  const subKont = req.body.sub_kont === '' ? 0 : parseInt(req.body.sub_kont, 10);
  const peralatan = req.body.peralatan === '' ? 0 : parseInt(req.body.peralatan, 10);
  const material = req.body.material === '' ? 0 : parseInt(req.body.material, 10);
  const materialBantu = req.body.material_bantu === '' ? 0 : parseInt(req.body.material_bantu, 10);
  const overhead = req.body.overhead === '' ? 0 : parseInt(req.body.overhead, 10);
  const totalHpp = dps + subKont + peralatan + material + materialBantu + overhead;
  const standarTarif = req.body.standar_tarif === '' ? 0 : parseInt(req.body.standar_tarif, 10);

  const result = await models.StandarTarif.update({
    item_pekerjaan: req.body.item_pekerjaan, jam_orang: jamOrang, dps, sub_kont: subKont, peralatan, material, material_bantu: materialBantu, overhead, total_hpp: totalHpp, standar_tarif: standarTarif
  }, { where: { id: req.params.id } });
  if (result[0]) {
    res.json({
      id: req.params.id, item_pekerjaan: req.body.item_pekerjaan, jam_orang: jamOrang, dps, sub_kont: subKont, peralatan, material, material_bantu: materialBantu, overhead, total_hpp: totalHpp, standar_tarif: standarTarif
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.deleteStandarTarif = async (req, res) => {
  const result = await models.StandarTarif.destroy({
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

exports.getStandarTarif = async (req, res) => {
  const result = await models.StandarTarif.findAll({ order: [['createdAt', 'DESC']] });
  res.json(result);
};

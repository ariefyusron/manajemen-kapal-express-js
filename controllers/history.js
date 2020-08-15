const models = require('../db/models');

const _sum = (item, key) => item.reduce((a, b) => parseInt(a, 10) + (parseInt(b[key], 10) || 0), 0);

exports.saveRab = async (req, res) => {
  const rab = await models.Rab.findAll({ where: { id_kapal: req.params.idKapal }, order: [['createdAt', 'DESC']], raw: true });
  const pekerjaan = await models.PekerjaanRab.findAll({ where: { id_kapal: req.params.idKapal }, raw: true });

  const totalBiayaTenagaKerja = _sum(rab, 'dps')
    + _sum(rab, 'sub_kont');

  const totalBiayaBahanBaku = _sum(rab, 'material');

  const totalBiayaOverhead = _sum(rab, 'overhead')
    + _sum(rab, 'material_bantu')
    + _sum(rab, 'jasa_peralatan');

  const totalBiayaTidakLangsung = Math.ceil(
    (totalBiayaTenagaKerja + totalBiayaBahanBaku + totalBiayaOverhead) * 0.025
  );

  const totalEstimasi = totalBiayaTenagaKerja
    + totalBiayaBahanBaku
    + totalBiayaOverhead
    + totalBiayaTidakLangsung;

  const history = await models.History.create({ total: totalEstimasi, id_kapal: req.params.idKapal });

  pekerjaan.map(async (item) => {
    const data = { ...item, id_history: history.get({ plain: true }).id, id_pekerjaan: item.id };
    delete data.id;
    delete data.is_save;
    delete data.createdAt;
    delete data.updatedAt;
    await models.HistoryPekerjaanRab.create(data);
    return true;
  });

  rab.map(async (item) => {
    const data = { ...item, id_history_pekerjaan: item.id_pekerjaan, id_history: history.get({ plain: true }).id };
    delete data.id_pekerjaan;
    delete data.id;
    delete data.createdAt;
    delete data.updatedAt;

    await models.HistoryRab.create(data);
    return true;
  });

  const result = await models.PekerjaanRab.update({ is_save: true }, { where: { id_kapal: req.params.idKapal } });
  if (result[0]) {
    res.json({
      message: 'sukses'
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.getHistory = async (req, res) => {
  const result = await models.History.findAll({ where: { id_kapal: req.params.idKapal }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.isEdit = async (req, res) => {
  const result = await models.PekerjaanRab.update({ is_save: false }, { where: { id_kapal: req.params.idKapal } });
  if (result[0]) {
    res.json({
      message: 'sukses'
    });
  }
  else {
    res.status(404).json({ message: 'Not found' });
  }
};

exports.getPekerjaan = async (req, res) => {
  const result = await models.HistoryPekerjaanRab.findAll({ where: { id_history: req.params.idHistory } });
  res.json(result);
};

exports.getRab = async (req, res) => {
  const result = await models.HistoryRab.findAll({ where: { id_history: req.params.idHistory }, order: [['createdAt', 'DESC']] });
  res.json(result);
};

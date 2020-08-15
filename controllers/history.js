const models = require('../db/models');

exports.saveRab = async (req, res) => {
  const rab = await models.Rab.findAll({ where: { id_kapal: req.params.idKapal }, order: [['createdAt', 'DESC']], raw: true });
  const pekerjaan = await models.PekerjaanRab.findAll({ where: { id_kapal: req.params.idKapal }, raw: true });

  pekerjaan.map(async (item) => {
    const data = { ...item };
    delete data.is_save;
    delete data.createdAt;
    delete data.updatedAt;

    await models.HistoryPekerjaanRab.create(data);
    return true;
  });

  rab.map(async (item) => {
    const data = { ...item, id_history_pekerjaan: item.id_pekerjaan };
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

const models = require('../db/models');

exports.createType = async (req, res) => {
  if (req.body.name) {
    const result = await models.KapalType.create(req.body);
    res.json(result);
  }
  else {
    res.status(400).json({ message: 'Name is required' });
  }
};

exports.updateType = (req, res) => {
  res.json({ title: 'ini update Type' });
};

exports.deleteType = async (req, res) => {
  const getKapal = await models.Kapal.findAll({ where: { kapal_type: req.params.id, is_delete: 0 }, order: [['createdAt', 'DESC']] });
  getKapal.map(async (e) => {
    await models.PekerjaanRab.destroy({
      where: {
        id_kapal: e.id
      }
    });

    await models.Rab.destroy({
      where: {
        id_kapal: e.id
      }
    });

    await models.PersetujuanRab.destroy({
      where: {
        id_kapal: e.id
      }
    });
  });

  await models.Kapal.destroy({
    where: {
      kapal_type: req.params.id
    }
  });
  const result = await models.KapalType.destroy({
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

exports.getType = async (req, res) => {
  const result = await models.KapalType.findAll({ order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdType = (req, res) => {
  res.json({ title: 'ini detail Type' });
};

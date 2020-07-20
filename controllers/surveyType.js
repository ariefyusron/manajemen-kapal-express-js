const models = require('../db/models');

exports.createType = async (req, res) => {
  if (req.body.name) {
    const result = await models.SurveyType.create(req.body);
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
  const getKapal = await models.Kapal.findAll({ where: { is_delete: 0 }, order: [['createdAt', 'DESC']] });
  getKapal.map(async (e) => {
    await models.Pengedokan.destroy({
      where: {
        id_kapal: e.id
      }
    });

    await models.PelayananUmum.destroy({
      where: {
        id_kapal: e.id
      }
    });
  });

  await models.Kapal.destroy({
    where: {
      survey_type: req.params.id
    }
  });
  const result = await models.SurveyType.destroy({
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
  const result = await models.SurveyType.findAll({ order: [['createdAt', 'DESC']] });
  res.json(result);
};

exports.getByIdType = (req, res) => {
  res.json({ title: 'ini detail Type' });
};

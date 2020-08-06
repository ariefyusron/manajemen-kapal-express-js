const models = require('../db/models');

exports.get = async (req, res) => {
  const kapal = await models.Kapal.findAll({ include: [{ model: models.KapalType }, { model: models.SurveyType }], where: { is_delete: 0 }, order: [['createdAt', 'DESC']] });
  const user = await models.User.findAll({
    attributes: ['id', 'username', 'is_admin'],
    order: [['createdAt', 'DESC']]
  });

  if (req.userData.is_admin) {
    res.json([
      {
        title: 'Kapal',
        value: kapal.length,
        icon: 'shipColor',
        link: 'dashboard/identitas-kapal'
      },
      {
        title: 'RAB Reparasi Kapal',
        value: kapal.length,
        icon: 'rabColor',
        link: 'dashboard/rab-reparasi-kapal'
      },
      {
        title: 'Users',
        value: user.length,
        icon: 'userColor',
        link: 'dashboard/admin/user'
      }
    ]);
  }
  else {
    res.json([
      {
        title: 'Kapal',
        value: kapal.length,
        icon: 'shipColor',
        link: 'dashboard/identitas-kapal'
      },
      {
        title: 'RAB Reparasi Kapal',
        value: kapal.length,
        icon: 'rabColor',
        link: 'dashboard/rab-reparasi-kapal'
      }
    ]);
  }
};

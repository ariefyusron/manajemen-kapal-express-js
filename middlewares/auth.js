exports.register = (req, res, next) => {
  if (!req.body.username) {
    res.status(400).json({ message: 'username is required' });
  }
  else if (!(req.body.password && req.body.password.length >= 8)) {
    res.status(400).json({ message: 'password min 8' });
  }
  else {
    req.body.password = req.bcrypt.hashSync(req.body.password, req.saltRounds);
    req.body.is_admin = req.body.is_admin || false;
    next();
  }
};

exports.checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = req.jwt.verify(token, req.secretKey);
    req.userData = decoded.showUser;
    next();
  }
  catch (e) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

exports.checkAdmin = (req, res, next) => {
  if (req.userData.is_admin) {
    next();
  }
  else {
    res.status(401).json({ message: 'Error permission' });
  }
};

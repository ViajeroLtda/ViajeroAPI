const UserService = require('../services/userService');

module.exports = class UserController {
  static get(req, res, next) {
    UserService.get(req.params.id)
      .then(user => res.status(200).send(user))
      .catch(next);
  }

  static list(req, res, next) {
    UserService.list()
      .then(users => res.status(200).send(users))
      .catch(next);
  }

  static post(req, res, next) {
    UserService.add(req.body)
      .then(user => res.status(200).send(user))
      .catch(next);
  }
}

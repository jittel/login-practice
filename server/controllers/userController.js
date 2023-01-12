const { User } = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.findAll()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    }
}
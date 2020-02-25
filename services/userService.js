const User = require('../models/user');

module.exports = class UserService {
    static async get(id) {
        return await User.findById({ _id: id });
    }

    static async list() {
        return await User.find();
    }

    static async add(data){
        const user = new User(data);

        await user.save();

        return user;
    }
  
}



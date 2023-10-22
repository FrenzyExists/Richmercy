const db = require("./db");
const boom = require("@hapi/boom");

const User = function (user) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
}

User.createUser = async (newUser, result) => {
    
}

module.exports = User;
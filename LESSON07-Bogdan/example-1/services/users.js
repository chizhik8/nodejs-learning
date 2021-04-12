const {User} = require("./schemas");

const getUsers = (params = {})=> {
    return User.find(params); // {name: "Herald"}
};

const getUserById = (id)=> {
    return User.findById(id);
};

const addUser = (user) => {
    return User.create(user);
    /*
    const newUser = new User(user);
    newUser.save();
    */
}

const updateUser = (id, user) => {
    return User.findByIdAndUpdate(id, user, {new: true});
}

const removeUser = (id) => {
    return User.findByIdAndRemove(id);
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    removeUser
}
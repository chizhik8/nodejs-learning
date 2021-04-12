const {usersService} = require("../services");

const get = async (req, res, next)=> {
    const {query = {}} = req;
    try {
        const results = await usersService.getUsers(query);
        res.json({
            status: "success",
            code: 200,
            data: {
                users: results
            }
        })
    }
    catch(err){
        next(err)
    }
};

const getById = async (req, res, next)=> {
    const {id} = req.params;
    try {
        const result = await usersService.getUserById(id);
        if(result) {
            res.json({
                status: "success",
                code: 200,
                data: {
                    user: result
                }
            })
        }
        else {
            res.status(404).json({
                status: "error",
                code: 404,
                message: `user with ${id} not found`,
                data: "not found"
            })
        }

    }
    catch(err){
        next(err)
    }
};

const add = async (req, res)=> {
    const {body} = req;
    try {
        const result = await usersService.addUser(body);
    }
    catch (err){

    }
};

const update = async (req, res)=> {

};

const remove = async (req, res)=> {

};

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}

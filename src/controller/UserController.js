const helper = require('../helper/index')
const userModel = require('../model/User')
const { genSaltSync, hashSync, compareSync } = require('bcryptjs')
const jwt = require('jsonwebtoken');

module.exports = {
    getUsers : async (req, res) => {
        try {
            const result = await userModel.getUserModel()
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    userDetail : async (req, res) => {
        const id = req.params.id
        try {
            const result = await userModel.userDetailModel(id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    regUser : async (req, res) => {
        const setData = req.body
        const salt = genSaltSync(10)
        setData.password = hashSync(setData.password, salt)
        try {
            const result = await userModel.regUserModel(setData)
            return helper.response(res, 'success', result, 201)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    loginUser : async (req,res) => {
        try {
            const username = req.body.username
            const result = await userModel.getUserByUsername(username)
            if (result[0]) {
                const user = result[0]
                const checkPass = compareSync(req.body.password, user.password)
                if (checkPass) {
                    delete user.password
                    const token = jwt.sign({ user : user },'secret',{ expiresIn : "1h" })
                    const newData = {
                        ...result[0],
                        token
                    }
                    return helper.response(res, 'success', newData, 200)
                }
                return helper.response(res, 'fail', 'Username Or Password Is Wrong!', 403)
            }
            return helper.response(res, 'fail', 'Data Not Found', 404)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    updateUser : async (req, res) => {
        const setData = req.body
        const id = req.params.id
        try {
            const result = await userModel.updateUserModel(setData, id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    deleteUser : async (req, res) => {
        const id = req.params.id
        try {
            const result = await userModel.deleteUserModel(id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
}
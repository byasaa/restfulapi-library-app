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
            console.log(result[0])
            return helper.response(res, 'success', result, 201)
            // if (result.length <= 0) {
            //     res.status(401).json({
            //         'errors': {
            //            message: 'Username & password wrong!',
            //         }
            //      })
            // } else {
            //     let user = result[0]
            //     compareSync(req.body.password , user.password, (error, result) => {
            //         if (error) {
            //             res.status(401).json({
            //                 'errors' : error.message
            //             })
            //         }
            //         if (result) {
            //             const token = jwt.sign({
            //                 user : user
            //             },
            //             'secret',
            //             {
            //                 expiresIn : "1h"
            //             }
            //             )
            //             return res.status(200).json({
            //                 message: 'Auth successfully.',
            //                 'data': {
            //                    id: user.id,
            //                    username: user.username,
            //                    token: token
            //                 },
            //              })
            //         }
            //     })
            // }
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
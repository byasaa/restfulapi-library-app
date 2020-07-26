const express = require('express')
const router = express.Router()
const userController = require('../../controller/UserController')
const {verifyToken, checkRole} = require('../../middleware/auth')

router
    .get('/', verifyToken,checkRole(['admin']), userController.getUsers)
    .get('/:id', verifyToken,checkRole(['admin']), userController.userDetail)
    .post('/', verifyToken,checkRole(['admin']), userController.addUser)
    .put('/:id', verifyToken,checkRole(['admin']), userController.updateUser)
    .delete('/:id',verifyToken,checkRole(['admin']), userController.deleteUser)

module.exports = router;
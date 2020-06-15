const express = require('express')
const router = express.Router()
const userController = require('../../controller/UserController')

router
    .get('/', verifyToken,checkAdmin, userController.getUsers)
    .get('/:id', verifyToken,checkAdmin, userController.userDetail)
    .put('/:id', verifyToken,checkAdmin, userController.updateUser)
    .delete('/:id',verifyToken,checkAdmin, userController.deleteUser)

module.exports = router;
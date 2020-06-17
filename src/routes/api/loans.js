const express = require('express')
const router = express.Router()
const loanController = require('../../controller/LoanController')
const {verifyToken, checkRole} = require('../../middleware/auth')

router
    .get('/',verifyToken, checkRole(['admin', 'staff']), loanController.getLoan)
    // .get('/user/:iduser', verifyToken, loanController.getLoanByUser)
    // .get('/:id', verifyToken,loanController.detailLoan)
    // .post('/',verifyToken,checkRole(['admin']), loanController.addLoan)
    // .put('/:id',verifyToken,checkRole(['admin']), loanController.updateLoan)
    // .delete('/:id',verifyToken,checkRole(['admin']), loanController.deleteLoan)

module.exports = router;
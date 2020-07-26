const express = require('express')
const router = express.Router()
const loanController = require('../../controller/LoanController')
const {verifyToken, checkRole} = require('../../middleware/auth')

router
    .get('/',verifyToken, checkRole(['admin', 'staff']), loanController.getLoan)
    .get('/user/:userid', verifyToken, loanController.getLoanByUser)
    .get('/book/:bookid', verifyToken, loanController.getLoanByBook)
    .patch('/:id', verifyToken, loanController.patchReturnBook)
    // .get('/:id', verifyToken,loanController.detailLoan)
    // .post('/',verifyToken,checkRole(['admin']), loanController.addLoan)
    // .put('/:id',verifyToken,checkRole(['admin']), loanController.updateLoan)
    // .delete('/:id',verifyToken,checkRole(['admin']), loanController.deleteLoan)

module.exports = router;
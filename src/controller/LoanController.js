const helper = require('../helper/index')
const loanModel = require('../model/Loan')
const jwt = require('jsonwebtoken')
const config = require('../config/global')

module.exports = {
    addLoan : async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    patchReturnBook : async (req, res) => {
        const id = req.params.id
        const setData = {
            book_id : req.body.book_id,
            status : 'returned',
            updated_at : new Date()
        }
        try {
            const result = await loanModel.patchReturnBookModel(setData,id);
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            if (error) {
                console.log(error)
                return helper.response(res, 'fail', 'Internal server Error', 500)
            }
        }
    },
    getLoan : async (req, res) => {
        try {
            const result = await loanModel.getLoanModel()
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    getLoanByBook : async (req, res) => {
        const id = req.params.bookid
        try {
            const result = await loanModel.getLoanByBookModel(id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    getLoanByUser : async (req, res) => {
        const userid = req.params.userid
        try {
            const result = await loanModel.getLoanByUserModel(userid)
            if (result[0]){
                return helper.response(res, 'success', result, 200)
            }else{
                return helper.response(res, 'null', 'Not find data', 404)
            }
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    updateLoan : async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    deleteLoan : async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
}
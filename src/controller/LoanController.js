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
    detailLoan : async (req, res) => {
        try {
            
        } catch (error) {
            
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
    getLoanByUser : async (req, res) => {
        try {
            
        } catch (error) {
            
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
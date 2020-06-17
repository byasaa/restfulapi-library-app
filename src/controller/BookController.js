const helper = require('../helper/index')
const bookModel = require('../model/Book')
const jwt = require('jsonwebtoken')
const config = require('../config/global')

module.exports = {
    bookDetail : async (req, res) => {
        const id = req.params.id
        try {
            const result = await bookModel.bookDetailModel(id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    getBooks : async (req, res) => {
        let limit = parseInt(req.query.limit) || 10
        let page = parseInt(req.query.page) || 1
        let sort = req.query.sort || 'DESC'
        let search = req.query.search || ''
        let orderBy = req.query.orderBy || 'created_at'
        try {
            const result = await bookModel.getBookModel(search, orderBy, sort, limit, page)
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
    borrowBook: async (req, res) => {
        const id = req.params.id
        const accessToken = req.headers.authorization
        const decoded = jwt.verify(accessToken, config.secretKey)
        req.decodedToken = decoded
        const setData = {
            user_id: decoded.user.id,
            book_id: id,
            status : 'borrow',
        }
        try {
            const result = await bookModel.loanBookModel(setData,id);
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            if (error) {
                console.log(error)
                return helper.response(res, 'fail', 'Internal server Error', 500)
            }
        }
    },
    returnBook: async (req, res) => {
        const id = req.params.id
        const setData = {
            id : req.body.loan_id,
            status : 'returned',
            updated_at : new Date()
        }
        try {
            const result = await bookModel.returnBookModel(setData,id);
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            if (error) {
                console.log(error)
                return helper.response(res, 'fail', 'Internal server Error', 500)
            }
        }
    },
    addBook : async (req, res)  => {
        const setData = {
            image : req.file.filename,
            ...req.body
        }
        try {
            const result = await bookModel.addBookModel(setData)
            return helper.response(res, 'success', result, 201)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    updateBook : async (req, res) => {
        const setData = {
            image : req.file.filename,
            ...req.body
        }
        const id = req.params.id
        setData.updated_at = new Date()
        try {
            const result = await bookModel.updateBookModel([setData,id]);
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            if (error) {
                console.log(error)
                return helper.response(res, 'fail', 'Internal server Error', 500)
            }
        }
    },
    deleteBook : async (req, res) => {
        const id = req.params.id
        try {
            const result = await bookModel.deleteBookModel(id)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    }
}
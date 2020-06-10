const helper = require('../helper/index')
const bookModel = require('../model/Book')

module.exports = {
    getBooks : async (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        try {
            const result = await bookModel.getBooksModel(limit, page)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    searchBook : async (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        let search = req.query.search || '';
        try {
            const result = await bookModel.searchBookModel(search, limit, page)
            if (result[0]){
                console.log(search)
                return helper.response(res, 'success', result, 200)
            }else{
                return helper.response(res, 'null', 'Not find data', 404)
            }
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    addBook : async (req, res)  => {
        const setData = req.body
        try {
            const result = await bookModel.addBookModel(setData)
            return helper.response(res, 'success', result, 201)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    }
}
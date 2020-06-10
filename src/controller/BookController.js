const helper = require('../helper/index')
const bookModel = require('../model/Book')

module.exports = {
    getBooks : async (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        let sort = req.query.sort || ''
        try {
            console.log(sort)
            const result = await bookModel.getBooksModel(sort, limit, page)
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    },
    searchBook : async (req, res) => {
        let limit = parseInt(req.query.limit) || 8
        let page = parseInt(req.query.page) || 1
        let sort = req.query.sort || ''
        let search = req.query.search || ''
        try {
            const result = await bookModel.searchBookModel(search, sort, limit, page)
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
    },
    updateBook : async (req, res) => {
        const setData = req.body
        const id = req.params.id
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
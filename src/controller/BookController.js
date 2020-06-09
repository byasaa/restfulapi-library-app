const helper = require('../helper/index')
const bookModel = require('../model/Book')

module.exports = {
    getBook : async (req, res) => {
        try {
            const result = await bookModel.getBookModel()
            return helper.response(res, 'success', result, 200)
        } catch (error) {
            console.log(error)
            return helper.response(res, 'fail', 'Internal server Error', 500)
        }
    }
}
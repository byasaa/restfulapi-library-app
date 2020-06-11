const multer = require('multer')
const path = require('path')
let storage = multer.diskStorage({
    destination: path.join(__dirname + '../../../../public/img/'),
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage, limits: { fileSize: 100000000 } })
module.exports = {upload}
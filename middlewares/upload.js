
const { error } = require('console');
const multer = require('multer');
const path = require('path');  // built in node module for specifying file directoty

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/') // folder to store files
    },
    filename: function (req,file,cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1025}, // 5MB max
    fileFilter: function (req, file, cb){
        const filetypes = /jpeg|jpg|png/;
        const mimetypes = filetypes.test(file.mimetype); //describes the type of data a file contains
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetypes && extname) {
            return cb(null, true)
        }
        cb(new Error('Only .png, .jpg and .jpeg Format are only allowed'));
    }
})
// server.js codes
const multer = require('multer');


// code for changing file name description
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
const upload = multer({ storage});


app.post('/api/upload', upload.single('file'), (req,res) =>{
    res.json(req.file); // multer json file description
})


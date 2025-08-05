// server.js codes
const multer = require('multer');
const upload = multer({dest: 'upload/'});


app.post('/api/upload', upload.single('file'), (req,res) =>{
    res.json(req.file); // multer json file description
})



const multer = require('multer');
const upload = multer({dest: 'upload/'});


app.post('/api/upload', upload.single(''), (req,res) =>{
    res.send('')
})
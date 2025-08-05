
const multer = require('multer');
const upload = multer({dest: 'upload/'});

// server.js codes
app.post('/api/upload', upload.single(''), (req,res) =>{
    res.send('Uploaded successfully')
})
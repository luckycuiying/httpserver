var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


const upload = multer({ dest: `uploads/` });
const path = require('path');
const fs = require('fs');


router.post('/upload', upload.single('test-upload'), (req, res) => {
    // 没有附带文件
    if (!req.file) {
        res.json({
            ok: false
        });
        return;
    }

    // 输出文件信息
    console.log('====================================================');
    console.log('fieldname: ' + req.file.fieldname);
    console.log('originalname: ' + req.file.originalname);
    console.log('encoding: ' + req.file.encoding);
    console.log('mimetype: ' + req.file.mimetype);
    console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
    console.log('destination: ' + req.file.destination);
    console.log('filename: ' + req.file.filename);
    console.log('path: ' + req.file.path);

    // // 重命名文件
    // let oldPath = path.join(__dirname, req.file.path);
    // let newPath = path.join(__dirname, 'uploads/' + req.file.originalname);
    // fs.rename(oldPath, newPath, (err) => {
    //     if (err) {
    //         res.json({
    //             ok: false
    //         });
    //         console.log(err);
    //     } else {
    //         res.json({
    //             ok: true
    //         });
    //     }
    // });
});

module.exports = router;
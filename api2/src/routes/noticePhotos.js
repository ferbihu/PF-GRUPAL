const {Router} = require ('express');
const router = Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId : process.env.ACCESS_KEY_ID ,
  secretAccessKey : process.env.SECRET_ACCESS_KEY,
});



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname)
    }
});

const uploads = multer({storage});

router.get('/', (req, res) => {
    const uploadsDirectory = path.join('uploads');
  
    fs.readdir(uploadsDirectory, (err, files) => {
      if(err) {
        return res.json({msg: err});
      }
      if(files.length === 0) {
        return res.json({msg: 'No images uploaded'});
      }
  
      console.log("SOY FILESSSSSS",files)
      return res.json({files});
    });
});
  
router.post('/', uploads.single('image'), (req, res) => {
    const image = req.file.path;
    fs.readFile(`${process.env.PWD}/uploads/${req.file.originalname}`,(err,data) =>{
        if(err)throw err;
        console.log(data);
        let paramsPutObject = {
          Bucket : 'olavioleta',
          Key : req.file.originalname,
          Body : data,
          ACL:'public-read'
        }
    s3.putObject(paramsPutObject, (err,data) => {
    if(err) throw err ; 
    console.log(data);
  })
    })
    
    res.json({msg: 'Image successfully created'});
});

module.exports = router;


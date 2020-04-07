const multer = require('multer')
const almacen = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/src/images');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + fileName  );
    }
});

module.exports = multer({
    storage: almacen,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
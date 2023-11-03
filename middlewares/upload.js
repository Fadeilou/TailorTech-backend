// Dans 'middlewares/upload.js'
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Sélectionnez le dossier de destination en fonction du type d'image
    let dest = 'images/';
    switch (req.route.path) {
      case '/users/:id/profile-picture':
        dest += 'profiles';
        break;
      case '/models/:id/picture':
        dest += 'models';
        break;
      case '/fabrics/:id/picture':
        dest += 'fabrics';
        break;
      default:
        dest += 'misc';
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

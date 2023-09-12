const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/key");
// https://www.bezkoder.com/node-js-upload-store-images-mongodb/
const storage = new GridFsStorage({
  url: dbConfig.mongoURI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "pdf", "doc", "docx"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-linkCollect-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: dbConfig.bucket,
      filename: `${Date.now()}-linkCollect-${file.originalname}`
    };
  }
});

const uploadFiles = multer({ storage: storage });

module.exports = uploadFiles
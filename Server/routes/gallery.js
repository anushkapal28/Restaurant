const express = require("express");
const multer = require("multer");
const { uploadImage, getImages } = require("../controllers/Gallery");
const { auth } = require("../middlewares/auth");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post("/", auth, upload.single("image"), uploadImage);
router.get("/", getImages);

module.exports = router;

const express = require("express");
const multer = require("multer");

const router = express.Router();

const { Menu } = require("../../Models/Menu");

const imageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "Image");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const uploadPic = multer(
  {
    storage: imageStorage,
    limits: {
      fileSize: 3000000
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error("Please upload an image"));
      }
      cb(undefined, true);
    }
  },
  (error, req, res, next) => {
    res.status(404).send({ error: error.message });
  }
);

router.put(
  "/addImage/:mealId",
  uploadPic.single("upload"),
  async (req, res) => {
    const meal = await Menu.findOneAndUpdate(
      { _id: req.params.mealId },
      { $set: { image: req.file.path } },
      { new: true }
    );

    res.send(meal);
  }
);

module.exports = router;

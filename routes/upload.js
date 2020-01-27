const express = require("express");
const router = express.Router();
const path = require("path");
router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded." }); // bad req
  }

  const file = req.files.file;

  const fileExt = path.extname(file.name);
  let newFileName =
    file.name.substr(0, file.name.lastIndexOf(".")).replace(/ /g, "") +
    Date.now() +
    fileExt;

  file.mv(`${__dirname}/../client/public/images/${newFileName}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ msg: `Server error ${err}` }); //server err
    }

    res.json({ fileName: file.name, filePath: `/images/${newFileName}` });
  });
});

module.exports = router;

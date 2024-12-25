const express = require("express");
const router = express.Router();
const studentController = require("../controllers//studentcontroller")

//View All Record
router.get("/",studentController.view);

// Add New Records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.adduser);

module.exports = router;
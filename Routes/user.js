const express = require("express");

const router = express.Router();

const addAdmin = require("../Controllers/User/addAdmin");
const logIn = require("../Controllers/User/logIn");

router.post("/addAdmin", addAdmin.addAdmin);

router.post("/logIn", logIn.logIn);

module.exports = router;

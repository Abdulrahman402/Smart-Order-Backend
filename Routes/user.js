const express = require("express");

const router = express.Router();

const auth = require("../Middleware/auth");

const addAdmin = require("../Controllers/User/addAdmin");
const addCashier = require("../Controllers/User/addCashier");
const logIn = require("../Controllers/User/logIn");
const allAdmins = require("../Controllers/User/allAdmins");
const allCashiers = require("../Controllers/User/allCashiers");
const myProfile = require("../Controllers/User/myProfile");
const changeName = require("../Controllers/User/changeName");
const changePassword = require("../Controllers/User/changePassword");

router.post("/addAdmin", auth, addAdmin.addAdmin);

router.post("/addCashier", auth, addCashier.addCashier);

router.post("/logIn", logIn.logIn);

router.get("/allAdmins", auth, allAdmins.allAdmins);

router.get("/allCashiers", auth, allCashiers.allCashiers);

router.get("/myProfile", auth, myProfile.myProfile);

router.put("/changeName", auth, changeName.changeName);

router.put("/changePassword", auth, changePassword.changePassword);

module.exports = router;

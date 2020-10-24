const express = require("express");

const router = express.Router();

const addClient = require("../Controllers/Client/addClient");
const allClients = require("../Controllers/Client/allClients");
const showClient = require("../Controllers/Client/showClient");
const removeClient = require("../Controllers/Client/removeClient");
const removeAll = require("../Controllers/Client/removeAll");

router.post("/addClient", addClient.addClient);

router.get("/allClients", allClients.allClients);

router.get("/showClient", showClient.showClient);

router.delete("/removeClient/:clientId", removeClient.removeClient);

router.delete("/removeAll", removeAll.removeAll);

module.exports = router;

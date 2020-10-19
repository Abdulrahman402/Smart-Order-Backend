const express = require("express");

const router = express.Router();

const addTable = require("../Controllers/Table/addTable");
const updateNumber = require("../Controllers/Table/updateNumber");
const deactivateTable = require("../Controllers/Table/deactivateTable");
const showTable = require("../Controllers/Table/showTable");
const displayTables = require("../Controllers/Table/displayTables");
const tableLogin = require("../Controllers/Table/tableLogin");

router.post("/addTable", addTable.addTable);

router.put("/updateNumber/:tableId", updateNumber.updateNumber);

router.put("/deactivateTable/:tableId", deactivateTable.deactivateTable);

router.get("/showTable/:tableId", showTable.showTable);

router.get("/displayTables", displayTables.displayTables);

router.get("/tableLogin/:number", tableLogin.tableLogin);

module.exports = router;

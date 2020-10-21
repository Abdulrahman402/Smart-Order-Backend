const express = require("express");

const router = express.Router();

const addTable = require("../Controllers/Table/addTable");
const updateNumber = require("../Controllers/Table/updateNumber");
const deactivateTable = require("../Controllers/Table/deactivateTable");
const showTable = require("../Controllers/Table/showTable");
const displayTables = require("../Controllers/Table/displayTables");
const tableLogin = require("../Controllers/Table/tableLogin");
const removeTable = require("../Controllers/Table/removeTable");
const removeAll = require("../Controllers/Table/removeAll");

router.post("/addTable", addTable.addTable);

router.put("/updateNumber/:tableId", updateNumber.updateNumber);

router.put("/deactivateTable/:tableId", deactivateTable.deactivateTable);

router.get("/showTable/:tableId", showTable.showTable);

router.get("/displayTables", displayTables.displayTables);

router.get("/tableLogin/:tableId", tableLogin.tableLogin);

router.delete("/removeTable/:tableId", removeTable.removeTable);

router.delete("/removeAll", removeAll.removeAll);

module.exports = router;

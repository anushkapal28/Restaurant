const express = require("express");
const { getMenuItems, createMenuItem } = require("../controllers/Menu");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.get("/", getMenuItems);
router.post("/", auth, createMenuItem);

module.exports = router;

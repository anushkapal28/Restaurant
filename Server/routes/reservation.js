const express = require("express");
const { createReservation, getReservations } = require("../controllers/Reservation");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, createReservation);
router.get("/", auth, getReservations);

module.exports = router;

const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
    const { date, time, guests, name } = req.body;

    try {
        const reservation = new Reservation({
            user: req.user.id,
            date,
            time,
            guests,
            name,
        });

        await reservation.save();

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ user: req.user.id }).populate("user", "name email");
        res.status(200).json({
            success: true,
            data: reservations,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

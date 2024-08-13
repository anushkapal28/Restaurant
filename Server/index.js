const express = require("express");
const {connectDB} = require("./config/database");
const cookieParser = require("cookie-parser");

require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));


app.use("/api/auth", require("./routes/auth"));
app.use("/api/menu", require("./routes/menu"));
app.use("/api/reservations", require("./routes/reservation"));
app.use("/api/gallery", require("./routes/gallery"));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

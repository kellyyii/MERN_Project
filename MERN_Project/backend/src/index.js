const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

connectDB = require("./lib/db.js")
const authRoutes = require("./routes/auth.route.js");
const messageRoutes = require("./routes/message.route.js");


connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const authRoutes = require("./routes/authRoutes")
const app = express();

//connect database
mongoose.connect(process.env.MONGO_URL)
    .then(() => (console.log("Database is connected successfully")))
    .catch((err) => console.log("Database connection failed", err))

//middleware connection
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/", authRoutes);

app.listen(process.env.PORT, '0.0.0.0', () => console.log(`Server is running on port ${process.env.PORT}`))
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

//test endpoint

const test = (req, res) => {
    res.json("Test is working")
}



//school register endpoint
const schReg = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: "All fields are required" })
        }

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ error: "Email already used" })

        const user = await User.create({ name, email, password })
        res.status(201).json({ message: "User created successfully", user })
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}


module.exports = {
    test,
    schReg
}
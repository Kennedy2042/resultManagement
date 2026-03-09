const express = require("express");
const cors = require("cors")
const router = express.Router();
const{
    test,
    schReg,
    schLogin
} = require("../controllers/authController")

router.use(
    cors({
        credentials: true,
        origin: '*'
    })
)

router.get("/", test)
router.post("/register", schReg)
router.post("/login", schLogin)



module.exports = router;
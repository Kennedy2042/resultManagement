const express = require("express");
const cors = require("cors")
const router = express.Router();
const{
    test,
    schReg
} = require("../controllers/authController")

router.use(
    cors({
        credentials: true,
        origin: '*'
    })
)

router.get("/", test)
router.post("/register", schReg)



module.exports = router;
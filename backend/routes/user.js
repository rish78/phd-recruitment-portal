const express = require('express');
const router = express.Router();

const {authenticateToken} = require("../middlewares/authenticateToken")
const {getUser} = require("../controllers/getUser");
const {updatePersonal} = require("../controllers/personal");

router.get("/", authenticateToken, getUser);
router.post("/personal", authenticateToken, updatePersonal);

module.exports = router;
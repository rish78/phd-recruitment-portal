const express = require('express');
const router = express.Router();

const {authenticateToken} = require("../middlewares/authenticateToken")
const {getUser} = require("../controllers/getUser");
const {updatePersonal} = require("../controllers/personal");
const {updateAcads} = require("../controllers/acads");
const {updateJob} = require("../controllers/job");

router.get("/", authenticateToken, getUser);
router.post("/personal", authenticateToken, updatePersonal);
router.post("/academics", authenticateToken, updateAcads);
router.post("/job", authenticateToken, updateJob);

module.exports = router;
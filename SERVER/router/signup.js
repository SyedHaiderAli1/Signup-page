//require
const express = require("express");
const { postUser, signInUser } = require("../controllers/signup");
//use router
const router = express.Router();

router.post("/signup", postUser);
router.post("/signin", signInUser);
module.exports = router;

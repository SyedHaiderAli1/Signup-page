//require
const express = require("express");
//req router
const router = require("./router/signup");
//req database
const connected = require("./database/index");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/", router);
connected();

app.listen(process.env.PORT, () => {
	console.log("server started");
});

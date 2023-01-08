const express = require('express');
const router = express.Router();
const { Users } = require("../models");


router.post("/", async(req, res) => {
   const {username, password} = req.body;
});


module.exports = router;

// https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8
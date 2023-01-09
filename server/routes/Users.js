const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");


router.post("/", async(req, res) => {
   const {username, email, password} = req.body;
   bcrypt.hash(password,10).then((hash)=>{
    Users.create({ 
        username: username,
        email: email,
        password: hash
    });
    res.json("Success!")
   });
});

router.post('/login', async (req, res) => {
    console.log("req",req)
    const {username, password} = req.body;

    const user = await Users.findOne({where:{username: username}});

    if(!user) res.json({error: "User Dosen't Exist"});

    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error: "Wrong Username and Password Combination!"});

        res.json("User Logged in");
    })
});
  

module.exports = router;

// https://www.youtube.com/watch?v=OGGnjBE5qr0&list=PLpPqplz6dKxUaZ630TY1BFIo5nP-_x-nL&index=8
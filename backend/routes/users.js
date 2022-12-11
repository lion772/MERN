const express = require("express");
const router = express.Router();
const { User } = require("../models/model");

router.get("/", (req, res) => {
    console.log("************************");
    console.log("Get Users");
    console.log("************************");

    //Get from MongoDB
    console.log(User);
    User.find().then((data) => {
        console.log("DATA RETURNED: ", data);
        res.status(201).json({ message: "Successful", data });
    });
});

module.exports = router;

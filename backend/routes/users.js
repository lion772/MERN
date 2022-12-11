const express = require("express");
const router = express.Router();
const { User } = require("../models/model");

const users = [
    {
        id: "u1",
        name: "william",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1024px-Collage_Venezia.jpg",
        placeCount: 4,
    },
    {
        id: "u2",
        name: "Franziska",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1024px-Collage_Venezia.jpg",
        placeCount: 1,
    },
];

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

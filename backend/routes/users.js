const express = require("express");
const router = express.Router();

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
    console.log("on the server!");
    console.log("************************");

    //Get from MongoDB

    res.status(201).json({ message: "Successful", data: users });
});

module.exports = router;

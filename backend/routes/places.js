const express = require("express");
const router = express.Router();

const places = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Emp. State Building",
        description: "One of the most famous sky scrapers in the world!",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: "u2",
    },
];

router.post("/", (req, res) => {
    console.log("************************");
    console.log("Get Places");
    console.log("************************");
    const { uid } = req.body;

    //todo: get places from mongoDB

    const placesBasedOnUid = places.filter((place) => place.creator === uid);

    res.status(201).json({
        message: "Placed retrieved!",
        places: placesBasedOnUid,
    });
});

module.exports = router;

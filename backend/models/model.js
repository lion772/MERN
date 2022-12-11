const { USERNAME, PASSWORD } = require("./secrets.json");

// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect(
        `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.xe1fe.mongodb.net/users?retryWrites=true&w=majority`
    );

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    placeCount: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

const placeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: { lat: Number, lng: Number }, required: true },
    creator: { type: String, required: true },
});

const Places = mongoose.model("Places", placeSchema);

module.exports = {
    User,
    Places,
};

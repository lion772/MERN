const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = 5000; // Loaded from .env file -> process.env.PORT
        this.paths = {
            auth: "/api/auth",
            homepage: "/api/homepage",
        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors()); // Enable CORS

        this.app.use(bodyParser.json());

        // CORS Headers => Required for cross-origin/ cross-server communication
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
            );
            next();
        });
    }

    // Bind controllers to routes
    routes() {
        this.app.use(this.paths.auth, require("../routes/auth"));
        this.app.use(this.paths.homepage, require("../routes/homepage"));

        // Catch all requests that don't match any route
        this.app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "../../build/index.html"));
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;

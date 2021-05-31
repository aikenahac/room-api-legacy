const express = require("express");
const appletv = require("node-appletv-x");
const app = express();

const PORT = process.env.PORT || 8585;

const marantzRoutes = require("./routes/marantz");
const appletvRoutes = require("./routes/appletv");

const {
    APPLETV_UUID,
    APPLETV_CREDENTIALS
} = require("./config.json");

const credentials = appletv.parseCredentials(APPLETV_CREDENTIALS);
let device;

async function connectAppleTV() {
    return appletv.scan(APPLETV_UUID)
        .then(devices => {
            device = devices[0];
            return device.openConnection(credentials);
        })
        .catch(error => {
            console.log(error);
        })
}

app.get("/", (req, res) => {
    res.json({
        message: "Room API"
    })
})

/**
 * Router Middleware
 * Router - /marantz/*
 * Method - *
 */

app.use("/marantz", marantzRoutes);

/**
 * Router Middleware
 * Router - /appletv/*
 * Method - *
 */

app.use("/appletv", appletvRoutes);

app.listen(PORT, () => {
    console.log("Initiating!");
    connectAppleTV().then(() => {
        console.log("Paired AppleTV.");
        app.set('device', device);
    });
    console.log(`Room api listening on ${PORT}`);
})

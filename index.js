const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const marantzRoutes = require("./routes/marantz");

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

app.listen(PORT, () => {
    console.log(`Room api listening on ${PORT}`);
})
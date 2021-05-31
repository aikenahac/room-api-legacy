const express = require("express");
const router = express.Router();

const appletv = require("../modules/appletv");

/**
 * @method - POST
 * @param - /menu
 * @description - Menu
 */

router.post("/menu", async (req, res) => {
    try {
        await appletv.menu(req.app.get('device'));

        res.send({
            message: "Menu"
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in menuing."
        })
    }
})

/**
 * @method - POST
 * @param - /play
 * @description - Play command
 */

router.post("/play", async (req, res) => {
    try {
        await appletv.play(req.app.get('device'));

        res.send({
            message: "Played."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in playing."
        })
    }
})

/**
 * @method - POST
 * @param - /pause
 * @description - Pause command
 */

router.post("/pause", async (req, res) => {
    try {
        await appletv.pause(req.app.get('device'));

        res.send({
            message: "Paused."
        })
    } catch (err) {
        res.send({
            message: "Error in paused."
        })
    }
})

/**
 * @method - POST
 * @param - /ok
 * @description - OK command
 */

router.post("/ok", async (req, res) => {
    try {
        await appletv.ok(req.app.get('device'));

        res.send({
            message: "OK."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in OK-ing."
        })
    }
})

/**
 * @method - POST
 * @param - /up
 * @description - UP command
 */

router.post("/up", async (req, res) => {
    try {
        await appletv.up(req.app.get('device'));

        res.send({
            message: "UP."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in UP."
        })
    }
})

/**
 * @method - POST
 * @param - /down
 * @description - DOWN command
 */

router.post("/down", async (req, res) => {
    try {
        await appletv.down(req.app.get('device'));

        res.send({
            message: "DOWN."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in down."
        })
    }
})

/**
 * @method - POST
 * @param - /right
 * @description - RIGHT command
 */

router.post("/right", async (req, res) => {
    try {
        await appletv.right(req.app.get('device'));

        res.send({
            message: "RIGHT."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in right."
        })
    }
})

/**
 * @method - POST
 * @param - /left
 * @description - LEFT command
 */

router.post("/left", async (req, res) => {
    try {
        await appletv.left(req.app.get('device'));

        res.send({
            message: "LEFT."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in left."
        })
    }
})

module.exports = router;
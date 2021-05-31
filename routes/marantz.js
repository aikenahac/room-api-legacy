const express = require("express");
const router = express.Router();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const marantz = require("../modules/marantz");

/**
 * @method - PUT
 * @param - /powerOff
 * @description - Turn Marantz off
 */

router.put("/powerOff", async (req, res) => {
    try {
        await marantz.powerOff();

        res.send({
            message: "Turned off."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in turning off"
        })
    }
})

/**
 * @method - PUT
 * @param - /powerOn
 * @description - Turn Marantz on
 */

router.put("/powerOn", async (req, res) => {
    try {
        await marantz.powerOn();

        res.send({
            message: "Turned on."
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in turning on"
        })
    }
})

/**
 * @method - PUT
 * @param - /volumeUp
 * @description - Turn up volume
 */

router.put("/volumeUp", async (req, res) => {
    try {
        await marantz.volumeUp();

        res.send({
            message: "Turned up volume"
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in turnig up volume"
        })
    }
})

/**
 * @method - PUT
 * @param - /volumeDown
 * @description - Turn up volume
 */

router.put("/volumeDown", async (req, res) => {
    try {
        await marantz.volumeDown();

        res.send({
            message: "Turned down volume"
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in turnig down volume"
        })
    }
})

/**
 * @method - PUT
 * @param - /toggleMute
 * @description - Toggles mute
 */

router.put("/toggleMute", async (req, res) => {
    try {
        await marantz.toggleMute();

        res.send({
            message: "Toggled mute"
        })
    } catch (err) {
        res.status(500);
        res.send({
            message: "Error in toggling mute"
        })
    }
})

module.exports = router;
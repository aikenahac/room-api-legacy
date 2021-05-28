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
        res.send({
            message: "Error in turning on"
        })
    }
})

module.exports = router;
const axios = require("axios");
const appletv = require("node-appletv-x");
const { AppleTV } = require("node-appletv-x");

const {
    APPLETV_UUID,
    APPLETV_CREDENTIALS
} = require("../config.json");

const credentials = appletv.parseCredentials(APPLETV_CREDENTIALS);

module.exports = {
    async menu(device) {
        return await device.sendKeyCommand(AppleTV.Key.Menu);
    },
    async pause(device) {
        return await device.sendKeyCommand(AppleTV.Key.Pause);
    },
    async play(device) {
        return await device.sendKeyCommand(AppleTV.Key.Play);
    },
    async ok(device) {
        return await device.sendKeyCommand(AppleTV.Key.Select)
    },
    async up(device) {
        return await device.sendKeyCommand(AppleTV.Key.Up);
    },
    async down(device) {
        return await device.sendKeyCommand(AppleTV.Key.Down);
    },
    async right(device) {
        return await device.sendKeyCommand(AppleTV.Key.Right);
    },
    async left(device) {
        return await device.sendKeyCommand(AppleTV.Key.Left);
    },
}
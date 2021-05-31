const axios = require("axios")

const {
    MARANTZ_IP
} = require("../config.json");

const url = MARANTZ_IP;

module.exports = {
    async powerOn() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutZone_OnOff%2FON&cmd1=aspMainZone_WebUpdateStatus%2F");
    },
    async powerOff() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutZone_OnOff%2FOFF&cmd1=aspMainZone_WebUpdateStatus%2F");
    },
    async volumeUp() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutMasterVolumeBtn%2F>&cmd1=aspMainZone_WebUpdateStatus%2F");
    },
    async volumeDown() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutMasterVolumeBtn%2F<&cmd1=aspMainZone_WebUpdateStatus%2F");
    }
}
const axios = require("axios")
const url = "http://192.168.1.182";

module.exports = {
    async powerOn() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutZone_OnOff%2FON&cmd1=aspMainZone_WebUpdateStatus%2F");
    },
    async powerOff() {
        await axios.get(url + "/MainZone/index.put.asp?cmd0=PutZone_OnOff%2FOFF&cmd1=aspMainZone_WebUpdateStatus%2F");
    }
}
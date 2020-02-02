const axios = require('axios');
const payloadSerialize = require('./payload.js');

// The SlackPost will take in a JSON payload and call the payloadSerialize function. It will send a POST
// request to to the Slack API at the specific route, provided by the payloadSerialize function.

module.exports = SlackPost = (payload,callback) => {
    const payloadParsed = payloadSerialize(payload);
    axios.post(payloadParsed.route,payloadParsed.message)
    .then(()=>{
        callback('');
    })
    .catch((error) => {
        callback(error);
    })
}
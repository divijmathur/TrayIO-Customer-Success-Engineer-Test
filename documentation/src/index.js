const data = require('./sample.json');
const axios = require('axios');
const $ = require('jquery');


// This is an example of a dummy receipt of a Salesforce Opportunity. Dummy JSON data has been import from the sample.json file which is in the JSON format.
// In this app I have provided a client-side application with three buttons that create the opportunities. The button will call the createOpportunity function and send a POST request to the Salesforce CRM.
// The three buttons represent different regions where the clients are located and the opportunities are generated. 
// Handling the data format of the opportunity and routing the messages will be taken care of the server-side.


const createOpportunity = (opportunity) => {
    axios.post('/salesOpportunity',opportunity)
    .then((res) => {
        console.log(`Response code: ${res.status}`);
    })
    .catch((err)=> {
        console.log(`There is an error ${err}`);
    })
};

$('#USPost').on('click', () => {
    createOpportunity(data.USSample);
});

$('#UKPost').on('click', () => {
    createOpportunity(data.UKSample);
});

$('#EUPost').on('click', () => {
    createOpportunity(data.EUSample);
});
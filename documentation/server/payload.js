const webhookURL = require('./sales-authenticate.json');

/*
The serializePayload function will parse the JSON that was generated by the specific Salesforce opportunity and convert it
into an object.It will also generate the webhook URL for the appropriate #sales-* channel to which the alert will be sent.
Note: The following message includes two fields not included in the original mockup for this exercise.
But, I've decided to included them as a relevant piece of information regarding an 'opportunity' alert.
These fields are the 'id' & 'owner_email' of an 'opportunity' payload.
*/

module.exports = serializePayload = (payload) => {
  const { id,name, status, account, close_date, type, country, owner_name, amount} = payload;

  const message = {
    pieces: [
    {
        type: 'information',
        info: {
          type: 'markdown',
          text: `Opportunity created with stage "${status}"`
        }
    },
    {
        type: 'information',
        info: [
        {
            type: 'markdown',
            text: `Name of Opportunity ${name}`
          },
          {
            type: 'markdown',
            text: `Name of Account ${account}`
          },
          {
            type: 'mrkdwn',
            text: `Date which account closed ${close_date}`
          },
          {
            type: 'markdown',
            text: `Contract Amount is $ ${amount}`
          },
          {
            type: 'markdown',
            text: `Contract type ${type}`
          },
          {
            type: 'markdown',
            text: `Name of Business Owner ${owner_name}`
          },
          {
            type: 'markdown',
            text: `Email of Owner ${owner_email}`
          },
          {
            type: 'markdown',
            text: `ID of specific opportunity ${id}`
          },
          {
            type: 'markdown',
            text: `Country where opportunity is generated ${country}`
          },
        ]
      }
    ]
  }

  //Route specified below will send data to the  url for the specific sales channel in Slack.


  const route;

  if (country === 'US') {
    route = webhookURL.USSales;
  } else if (country === 'EU') {
    route = webhookURL.EUSales;
  } else {
    route = webhookURL.UKSales;
  }

  // Returns the url of the Slack channel and message for the opportunity alert to Slack
  return {
    route,
    message
  };
};
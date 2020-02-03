<<<<<<< HEAD
Customer Success Engineer Test 
Requirements
The idea of this project is to show an automation strategy using the Tray.io platform. The objective of this project is to convert a CRM(Salesforce) 'Opportunity' into a webhook to a specific slack channel.

Salesforce Opportunity
When a salesrep generates an opportunity in Salesforce, a webhook is sending a POST request with a JSON data object. This data object will include the relevant opportunity information in specific parts. For example an opportunity looks like what is displayed below
entication
 is generated{
"id": "0065800000BwzJt",
"name": "Sample02",
"status": "Qualification",
"account": "Andrew Test",
"close_date": "2017-03-16",
"type": "New Business",
"country": "UK", // can also be US or EU
"owner_name": "Andrew",
"owner_email": "andrew@tray.io",
"amount": 4500
}

The goal of this project is to automate the process of notifying the team of an opportunity using a webhook POST request to Slack. Having the country value will help to send the opportunity to the appropriate slack channel.

Integrating with Slack
When you will need to send an external message to Slack, there are a few additional steps.

Once you have installed the Tray.io on your workspace, an authentication (OAuth) token is created to allow the direct posting. Please remember to grant permissions in the channel to receive these requests.

Running the Integration
To run the Integration,
An OAuth token and webhook URLS must be created in the sales_authenticate.json, which would allow the Tray.IO Integration to post to the respective Slack Channel. 

Remember to configure write access for the workspace.

When you run the program in a terminal, run the command npm run start from the Documentation directory. Once you see the message in the console Express server listening on port 3000!, navigate a browser window to localhost:3000 to load the client.
=======

>>>>>>> 4d7cb3f4562e88cbd0aa6b6ed8d4651157b5901f

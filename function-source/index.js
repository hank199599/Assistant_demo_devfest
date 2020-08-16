'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
app.intent('用戶輸入的顏色', (conv, {color}) => {
    
	// Respond with the specific response and end the conversation.
	if(color==="綠色"){conv.close('綠光戰警?');}
	else if(color==="紅色"){conv.close('感覺充滿喜氣');}
	else if(color==="藍色"){conv.close('藍色是最溫暖的顏色');}
	else {conv.close('真巧，我也喜歡'+color);}
    
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
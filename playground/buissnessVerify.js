const { google } = require("googleapis");

const client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);

// Obtain the user's access token
const accessToken = USER_ACCESS_TOKEN;

// Set the access token to the client
client.setCredentials({
	access_token: accessToken,
});

// Obtain the business's Google Place ID
const placeId = BUSINESS_PLACE_ID;

// Create a verification request
const requestData = {
	method: "POST",
	url: `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}:verify`,
	headers: {
		Authorization: `Bearer ${accessToken}`,
	},
	data: {
		method: "PHONE",
		phoneInput: {
			phoneNumber: BUSINESS_PHONE_NUMBER,
		},
	},
};

// Send the verification request to Google My Business API
google.request(requestData, function (err, response) {
	if (err) {
		console.error(err);
	} else {
		console.log(response.data);
	}
});

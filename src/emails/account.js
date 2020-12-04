const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const setgridAPIKey = process.env.setgridAPIKey;

sgMail.setApiKey(setgridAPIKey);

const sendWelcomeEmail = async (email, name) => {
	await sgMail.send({
		to: email,
		from: "16etcit003@technonjr.org",
		subject: "Thank you for joining!",
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	});
};

const sendGoodByeEmail = async (email, name) => {
	await sgMail.send({
		to: email,
		from: "16etcit003@technonjr.org",
		subject: "It was a pleasure knowing you!",
		text: `Sorry to see you go ${name}. Please let me know why you deleted the app.`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendGoodByeEmail,
};

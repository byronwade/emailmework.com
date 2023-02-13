const dotenv = require("dotenv");

dotenv.config();

exports.myFunction = (req, res) => {
	const googleId = process.env.GOOGLE_ID;
	const googleSecret = process.env.GOOGLE_SECRET;
	const githubId = process.env.GITHUB_ID;
	const githubSecret = process.env.GITHUB_SECRET;
	const nextAuthUrl = process.env.NEXTAUTH_URL;
	const nextAuthSecret = process.env.NEXTAUTH_SECRET;
	const recaptchaId = process.env.RECAPTCHA_ID;
	const recaptchaSecret = process.env.RECAPTCHA_SECRET;
	const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
	const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

	// Use the environment variables in your function logic
	// ...

	res.send("Environment variables are successfully loaded!");
};

import React, { useState } from "react";

const SignUpForm = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");

	const handleSignUp = async (e) => {
		e.preventDefault();

		const response = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				emailType: "welcome",
				to: email,
				subject: "Welcome to EmailMeWork!",
				firstName,
				url: "https://example.com",
			}),
		});

		const data = await response.json();
		if (response.ok) {
			console.log("Email sent successfully:", data);
		} else {
			console.error("Error sending email:", data.error);
		}
	};

	return (
		<form onSubmit={handleSignUp}>
			<label>
				First Name:
				<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
			</label>
			<label>
				Email:
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
			</label>
			<button type="submit">Sign Up</button>
		</form>
	);
};

export default SignUpForm;

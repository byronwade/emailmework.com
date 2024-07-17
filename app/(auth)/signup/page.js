import UserSignupForm from "@/components/auth/UserSignupForm";

export const metadata = {
	title: "Sign Up - EmailMeWork",
	description: "Create an account on EmailMeWork to post jobs and find professional services easily.",
	keywords: ["EmailMeWork", "sign up", "create account", "find pros", "contractors", "home improvement"],
	openGraph: {
		title: "Sign Up - EmailMeWork",
		description: "Create an account on EmailMeWork to post jobs and find professional services easily.",
		url: "https://emailmework.com/signup",
		siteName: "EmailMeWork",
		images: [
			{
				url: "https://emailmework.com/og-signup.jpg",
				width: 800,
				height: 600,
				alt: "Sign Up at EmailMeWork",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sign Up - EmailMeWork",
		description: "Create an account on EmailMeWork to post jobs and find professional services easily.",
		images: ["https://emailmework.com/twitter-signup.jpg"],
	},
	alternates: {
		canonical: "https://emailmework.com/signup",
		languages: {
			"en-US": "https://emailmework.com/en-US/signup",
			"es-ES": "https://emailmework.com/es-ES/signup",
		},
	},
};

const jsonLdData = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	url: "https://emailmework.com/signup",
	name: "EmailMeWork",
	description: "Create an account on EmailMeWork to post jobs and find professional services easily.",
	publisher: {
		"@type": "Organization",
		name: "EmailMeWork",
		logo: {
			"@type": "ImageObject",
			url: "https://emailmework.com/logo.png",
		},
	},
	potentialAction: {
		"@type": "SearchAction",
		target: "https://emailmework.com/search?q={search_term_string}",
		"query-input": "required name=search_term_string",
	},
};

export default function Signup() {
	return (
		<>
			<main>
				<UserSignupForm />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
			</main>
		</>
	);
}

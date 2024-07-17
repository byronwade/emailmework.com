import LoginPage from "@/components/auth/LoginForm";

export const metadata = {
	title: "Login - EmailMeWork",
	description: "Log in to your EmailMeWork account to post jobs and connect with professional service providers easily.",
	keywords: ["EmailMeWork", "login", "log in", "account access", "find pros", "contractors", "home improvement"],
	openGraph: {
		title: "Login - EmailMeWork",
		description: "Log in to your EmailMeWork account to post jobs and connect with professional service providers easily.",
		url: "https://emailmework.com/login",
		siteName: "EmailMeWork",
		images: [
			{
				url: "https://emailmework.com/og-login.jpg",
				width: 800,
				height: 600,
				alt: "Login to EmailMeWork",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Login - EmailMeWork",
		description: "Log in to your EmailMeWork account to post jobs and connect with professional service providers easily.",
		images: ["https://emailmework.com/twitter-login.jpg"],
	},
	alternates: {
		canonical: "https://emailmework.com/login",
		languages: {
			"en-US": "https://emailmework.com/en-US/login",
			"es-ES": "https://emailmework.com/es-ES/login",
		},
	},
};

const jsonLdData = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	url: "https://emailmework.com/login",
	name: "EmailMeWork",
	description: "Log in to your EmailMeWork account to post jobs and connect with professional service providers easily.",
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

export default function Login() {
	return (
		<>
			<main>
				<LoginPage />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
			</main>
		</>
	);
}

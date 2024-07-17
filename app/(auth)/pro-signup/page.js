import ProSignupForm from "@/components/auth/ProSignupForm";

export const metadata = {
	title: "Professional Signup - EmailMeWork",
	description: "Join EmailMeWork as a contractor or service provider to find job leads and connect with potential customers.",
	keywords: ["EmailMeWork", "professional signup", "contractors", "service providers", "job leads", "home improvement"],
	openGraph: {
		title: "Professional Signup - EmailMeWork",
		description: "Join EmailMeWork as a contractor or service provider to find job leads and connect with potential customers.",
		url: "https://emailmework.com/pro-signup",
		siteName: "EmailMeWork",
		images: [
			{
				url: "https://emailmework.com/og-pro-signup.jpg",
				width: 800,
				height: 600,
				alt: "Professional Signup at EmailMeWork",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Professional Signup - EmailMeWork",
		description: "Join EmailMeWork as a contractor or service provider to find job leads and connect with potential customers.",
		images: ["https://emailmework.com/twitter-pro-signup.jpg"],
	},
	alternates: {
		canonical: "https://emailmework.com/pro-signup",
		languages: {
			"en-US": "https://emailmework.com/en-US/pro-signup",
			"es-ES": "https://emailmework.com/es-ES/pro-signup",
		},
	},
};

const jsonLdData = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	url: "https://emailmework.com/pro-signup",
	name: "EmailMeWork",
	description: "Join EmailMeWork as a contractor or service provider to find job leads and connect with potential customers.",
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

export default function ProSignup() {
	return (
		<>
			<main>
				<ProSignupForm />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
			</main>
		</>
	);
}

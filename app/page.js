// app/page.tsx

import Header from "@/components/(site)/Header";

export const metadata = {
	title: "EmailMeWork - Find Professional Services Easily",
	description: "EmailMeWork connects customers with professional service providers effortlessly. Post your job and get connected with the right professionals.",
	keywords: ["EmailMeWork", "professional services", "find pros", "contractors", "home improvement"],
	openGraph: {
		title: "EmailMeWork - Find Professional Services Easily",
		description: "EmailMeWork connects customers with professional service providers effortlessly. Post your job and get connected with the right professionals.",
		url: "https://emailmework.com",
		siteName: "EmailMeWork",
		images: [
			{
				url: "https://emailmework.com/og-image.jpg",
				width: 800,
				height: 600,
				alt: "EmailMeWork Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "EmailMeWork - Find Professional Services Easily",
		description: "EmailMeWork connects customers with professional service providers effortlessly. Post your job and get connected with the right professionals.",
		images: ["https://emailmework.com/twitter-image.jpg"],
	},
	alternates: {
		canonical: "https://emailmework.com",
		languages: {
			"en-US": "https://emailmework.com/en-US",
			"es-ES": "https://emailmework.com/es-ES",
		},
	},
};

export default function Home() {
	return (
		<>
			<Header />
			<main className="container p-4 mx-auto">
				<h1>Welcome to EmailMeWork</h1>
				<p>Your go-to platform for finding professional services effortlessly.</p>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
			</main>
		</>
	);
}

const jsonLdData = {
	"@context": "http://schema.org",
	"@type": "WebSite",
	url: "https://emailmework.com",
	name: "EmailMeWork",
	description: "EmailMeWork connects customers with professional service providers effortlessly. Post your job and get connected with the right professionals.",
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

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
		instrumentationHook: true,
		serverActions: true,
	},

	// Image domain whitelist
	images: {
		domains: [
			"res.cloudinary.com",
			"images.unsplash.com", // Adding Unsplash to the list
		],
	},
};

module.exports = nextConfig

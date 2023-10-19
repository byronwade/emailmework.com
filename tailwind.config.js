/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				btn: {
					background: "hsl(var(--btn-background))",
					"background-hover": "hsl(var(--btn-background-hover))",
				},
				brown: {
					50: "#fffde5",
					100: "#fffdbc",
					200: "#fff67c",
					300: "#ffe932",
					400: "#ffd500",
					500: "#ffb900",
					600: "#e18b00",
					700: "#b36000",
					800: "#964b00",
					900: "#7c3b07",
					950: "#491d00",
				},
				dark: "#222222",
			},
		},
	},
	plugins: [],
};

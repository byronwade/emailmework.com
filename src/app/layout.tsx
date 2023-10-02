"use client";
import { AuthContextProvider } from "../context/AuthContext";
import { ThemeProvider, useTheme } from "../context/ThemeContext"; // Adjust the import path

import "@/styles/globals.css";

const ThemeColor = ({ children }: { children: React.ReactNode }) => {
	const { mode } = useTheme(); // Destructure mode from useTheme

	return (
		<body className={`h-full ${mode}`}>
			<AuthContextProvider>{children}</AuthContextProvider>
		</body>
	);
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	console.log(useTheme);
	return (
		<ThemeProvider>
			<html className="h-full">
				<ThemeColor>{children}</ThemeColor>
			</html>
		</ThemeProvider>
	);
}

"use client";
import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

import { UserProvider } from "@/context/UserContext";
import { ProProvider } from "@/context/ProContext";
import { JobProvider } from "@/context/JobContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { SettingsProvider } from "@/context/SettingsContext";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<UserProvider>
						<ProProvider>
							<JobProvider>
								<NotificationProvider>
									<SettingsProvider>{children}</SettingsProvider>
								</NotificationProvider>
							</JobProvider>
						</ProProvider>
					</UserProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

"use client"
import "./globals.css";
import { RecoilRoot } from "recoil";
import SessionProvider from "./SessionProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../supabase.js";
import Tracker from "@openreplay/tracker";
import { useEffect } from "react";

const tracker = new Tracker({
	projectKey: "yTzdAOTaOlFlw53QvmhI",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		// use componentDidMount in case of React Class Component
		tracker.start();
		tracker.setUserID("bcw1995@gmail.com");
	}, []);
	return (
		<html lang="en">
			{/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
			<head />
			<body>
				<ApolloProvider client={client}>
					<SessionProvider>
						<RecoilRoot>{children}</RecoilRoot>
					</SessionProvider>
				</ApolloProvider>
			</body>
		</html>
	);
}

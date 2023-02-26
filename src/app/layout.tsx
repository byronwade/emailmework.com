// @ts-nocheck
"use client";
import "./globals.css";
import { RecoilRoot } from "recoil";
import SessionProvider from "./SessionProvider";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../supabase.js";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

// after calling LogRocket.init()
setupLogRocketReact(LogRocket);

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

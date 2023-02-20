"use client"
import './globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  RecoilRoot
} from 'recoil';
import SessionProvider from "./components/SessionProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
			<head />
			<body>
				<SessionProvider>
					<RecoilRoot>
						<ChakraProvider>{children}</ChakraProvider>
					</RecoilRoot>
				</SessionProvider>
			</body>
		</html>
	);
}

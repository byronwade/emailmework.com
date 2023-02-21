"use client";
import { signIn } from "next-auth/react";
import Header from "@components/Website/Header/Header";

export default function Login() {
	return (
		<>
			<Header />
			<div>
				<button onClick={() => signIn("google")}>sign in google</button>
				<button onClick={() => signIn("github")}>sign in github</button>
				<button onClick={() => signIn("facebook")}>sign in facebook</button>
			</div>
		</>
	);
}

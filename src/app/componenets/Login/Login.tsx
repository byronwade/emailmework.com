"use client";
import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div>
			<Button onClick={() => signIn("google")}>sign in google</Button>
			<Button onClick={() => signIn("github")}>sign in github</Button>
			<Button onClick={() => signIn("facebook")}>sign in facebook</Button>
		</div>
	);
}

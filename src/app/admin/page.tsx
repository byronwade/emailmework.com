"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Test from "../components/Test";
import Header from "../components/Header/Header";

export default function Companies() {
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (session === null) {
		router.push("/login");
		return <div>Redirecting to login...</div>;
	}
	return (
		<div>
			<Header />
			<div>
				<Test />
			</div>
		</div>
	);
}

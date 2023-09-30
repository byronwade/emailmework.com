"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; // Corrected import
import { getAuth, signOut } from "firebase/auth";
import MainMenu from "@/components/mainMenu";
import { useTheme } from "@/context/ThemeContext";
import NavBar from "@/components/navbar";

function Dashboard() {
	const { user } = useAuthContext();
	const router = useRouter();
	const auth = getAuth();
	const { mode } = useTheme(); // Destructure mode from useTheme

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-white" : "text-black";

	useEffect(() => {
		if (user == null) router.push("/");
	}, [user]);

	return (
		<main className="h-full overflow-y-hidden">
			<div className="xs:flex-col flex h-full w-full overflow-y-auto md:flex-row">
				<MainMenu />
				<div className="w-full px-4">
					<NavBar />
					<div className="py-4">
						<h1 className={`${color}`}>Are you looking for work or looking for a contractor?</h1>
						<button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">get leads</button>
						<button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">get contractors</button>
						{/* <h1 className={`${color}`}>Only logged in users can view this page</h1>
						<button className={`${color}`} onClick={() => signOut(auth)}>
							Sign Out
						</button> */}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;

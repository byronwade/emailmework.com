"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; // Corrected import
import { getAuth, signOut } from "firebase/auth";
import MainMenu from "@/components/mainMenu";
import { useTheme } from "@/context/ThemeContext";
import NavBar from "@/components/navbar";
import { Plus } from "react-feather";

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
			<NavBar />
			<div className="xs:flex-col flex h-full w-full overflow-y-auto md:flex-row">
				<MainMenu />
				<div className="xs:pt-8 w-full px-4 pt-16">
					<div className="flex flex-wrap items-center gap-6 sm:flex-nowrap">
						<h1 className="text-base font-semibold leading-7 text-gray-900">Cashflow</h1>
						<div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
							<a href="#" className={`${color}`}>
								Last 7 days
							</a>
							<a href="#" className="text-gray-700">
								Last 30 days
							</a>
							<a href="#" className="text-gray-700">
								All-time
							</a>
						</div>
						<a href="#" className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							<Plus className="-ml-1.5 h-5 w-5" aria-hidden="true" />
							New Job
						</a>
					</div>
					<div className="py-4">
						<h1 className={`${color}`}>Only logged in users can view this page</h1>
						<button className={`${color}`} onClick={() => signOut(auth)}>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;

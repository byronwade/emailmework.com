"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path
import { Bell, Mail } from "react-feather";

export default function NavBar() {
	const { mode, toggleMode } = useTheme();

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-[#cccccc]" : "text-[#1c1c1c]";

	return (
		<div className="flex w-full items-center justify-between md:min-h-[4rem] md:border-none md:bg-transparent">
			<h3 className={`flex w-full justify-start text-xl font-bold ${color}`}>emailmework.com</h3>
			<div className="flex w-full items-center justify-end">
				<button type="button" className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Get Leads
				</button>
				<Link href="#" className={`flex items-center justify-end rounded px-4 text-xs font-semibold shadow-sm`}>
					<div className="flex items-center">
						<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#333333]">
							<Bell className={`${color}`} size="18" />
							<div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white dark:border-gray-900">20</div>
						</div>
					</div>
				</Link>
				<Link href="#" className={`flex items-center justify-end rounded pr-4 text-xs font-semibold shadow-sm`}>
					<div className="flex items-center">
						<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#855E42]">
							<span className="text-xs font-medium leading-none text-white">TW</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

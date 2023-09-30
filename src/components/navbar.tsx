"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path

export default function NavBar() {
	const { mode, toggleMode } = useTheme();

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-[#cccccc]" : "text-[#1c1c1c]";

	return (
		<div className="fixed z-10 flex w-full items-center justify-end md:min-h-[4rem] md:border-none md:bg-transparent">
			<Link href="#" className={`flex items-center rounded px-4 text-xs font-semibold shadow-sm`}>
				<div className="flex items-center">
					<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#855E42]">
						<span className="text-xs font-medium leading-none text-white">TW</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

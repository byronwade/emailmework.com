"use client";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, Sliders, LogOut, Home, Star } from "react-feather";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path
import { signOut } from "firebase/auth";
import { CreditCard } from "lucide-react";

export default function MainMenu() {
	const { mode, toggleMode } = useTheme();

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-[#cccccc]" : "text-[#1c1c1c]";

	return (
		<div className="xs:hidden xs:justify-center z-10 flex h-full flex-col justify-between px-2 pb-8 md:flex md:shrink-0">
			<div className="flex flex-col items-center justify-start gap-4 md:items-start">
				<Link href="#" className={`flex shrink-0 items-center gap-3 rounded-md px-4 py-1.5 md:min-h-[4rem]`}>
					<Image src="/images/logo.png" width={40} height={40} alt="Company Logo" />
				</Link>
			</div>
			<div className="flex flex-col items-center justify-end gap-4 md:items-start">
				<Link href="/dashboard" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Home className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Job Postings</span>
				</Link>
				<Link href="/dashboard/settings" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Sliders className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Settings</span>
				</Link>
				<Link href="/dashboard/billing" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<CreditCard className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Billing</span>
				</Link>

				<Link href="/dashboard/upgrade" className={`flex shrink-0 gap-3 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Star className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Upgrade</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`} onClick={toggleMode}>
					{mode === "bg-[#1c1c1c]" ? <Sun color="#FFD700" size="20" /> : <Moon color="#2F4F4F" size="20" />}
					{mode === "bg-[#1c1c1c]" ? <span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Light</span> : <span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Dark</span>}
				</Link>
				{/* <Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Mail className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Support</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Share2 className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Share</span>
				</Link> */}
				<Link href="/logout" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<LogOut className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Logout</span>
				</Link>
			</div>
		</div>
	);
}

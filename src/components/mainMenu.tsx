"use client";
import Link from "next/link";
import { Sun, Moon, Sliders, LogOut, Share2, Mail, Home } from "react-feather";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path
import { signOut } from "firebase/auth";

export default function MainMenu() {
	const { mode, toggleMode } = useTheme();

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-[#cccccc]" : "text-[#1c1c1c]";

	return (
		<div className="xs:hidden xs:justify-center z-10 flex h-full flex-col justify-between p-2 pb-8 md:flex md:shrink-0">
			<div className="flex flex-col justify-start gap-4">
				<Link href="#" className={`flex shrink-0 items-center gap-3 rounded-md px-4 py-1.5 md:min-h-[4rem]`}>
					<Share2 className={`${color}`} size="20" />
				</Link>
			</div>
			<div className="flex flex-col justify-end gap-4">
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Home className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Home</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Sliders className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Settings</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`} onClick={toggleMode}>
					{mode === "bg-[#1c1c1c]" ? <Sun color="#FFD700" size="20" /> : <Moon color="#2F4F4F" size="20" />}
					{mode === "bg-[#1c1c1c]" ? <span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Light</span> : <span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Dark</span>}
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Mail className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Support</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Share2 className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Share</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold shadow-sm duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<LogOut className={`${color}`} size="20" />
					<span className={`${color} xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Logout</span>
				</Link>
			</div>
		</div>
	);
}

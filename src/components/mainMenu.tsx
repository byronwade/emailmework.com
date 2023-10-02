"use client";
import Link from "next/link";
import Image from "next/image";
import { Sun, Moon, Sliders, LogOut, Home, Star, Mail } from "react-feather";
import { useTheme } from "../context/ThemeContext";
import { signOut } from "firebase/auth";
import { CreditCard } from "lucide-react";
import { usePathname } from "next/navigation";

// Color mapping for contrast.
const colorModes = {
	"bg-[#1c1c1c]": "[#cccccc]",
	"bg-[#cccccc]": "[#1c1c1c]",
};

/**
 * Determines the contrasting color for the current mode.
 * Optionally, inverts the color selection based on the `inverse` parameter.
 *
 * @param {string} currentMode - Current theme mode.
 * @param {boolean} [inverse=false] - Flag to indicate inversion.
 * @returns {string} - The contrasting color.
 */
function getContrastColor(currentMode, inverse = false) {
	const color = colorModes[currentMode];
	if (!color) return currentMode;

	if (inverse) {
		return currentMode === "bg-[#1c1c1c]" ? "[#1c1c1c]" : "[#cccccc]";
	}
	return color;
}

/**
 * The MainMenu component. Renders a set of navigation links with theme-aware colors.
 */
export default function MainMenu() {
	const { mode, toggleMode } = useTheme();
	const pathname = usePathname();

	const color = getContrastColor(mode);
	const inverseColor = getContrastColor(mode, true);

	console.log(color, inverseColor);

	return (
		<div className={`sticky top-0 flex h-screen flex-col items-center justify-between bg-${inverseColor} px-4 pb-8`}>
			<div className="flex flex-col items-center justify-start gap-4 md:items-start">
				<Link href="#" className={`flex shrink-0 items-center gap-3 rounded-md px-4 py-4 md:min-h-[4rem]`}>
					<Image src="/images/logo.png" width={60} height={60} alt="Company Logo" />
				</Link>
			</div>
			<div className="flex flex-col items-center justify-end gap-4 md:items-start">
				<Link href="/dashboard" className={`${pathname == "/dashboard" ? "bg-[#3f3f3f]" : ""} flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`}>
					<Home className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Job Postings</span>
				</Link>
				<Link href="/dashboard/get-leads" className={`${pathname == "/dashboard/get-leads" ? "bg-[#3f3f3f]" : ""} flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5  text-xs font-semibold duration-300 ease-in-out hover:bg-[#3f3f3f]`}>
					<Mail className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Get Leads</span>
				</Link>
				<Link href="/dashboard/settings" className={`${pathname == "/dashboard/settings" ? "bg-[#3f3f3f]" : ""} flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`}>
					<Sliders className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Settings</span>
				</Link>
				<Link href="/dashboard/billing" className={`${pathname == "/dashboard/billing" ? "bg-[#3f3f3f]" : ""} flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`}>
					<CreditCard className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Billing</span>
				</Link>

				<Link href="/dashboard/upgrade" className={`flex w-full shrink-0 gap-3 rounded-md bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500 px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`}>
					<Star className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Upgrade</span>
				</Link>
				<Link href="#" className={`flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`} onClick={toggleMode}>
					{mode === "bg-[#1c1c1c]" ? <Sun color="#FFD700" size="20" /> : <Moon color="#2F4F4F" size="20" />}
					{mode === "bg-[#1c1c1c]" ? <span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Light</span> : <span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Dark</span>}
				</Link>
				{/* <Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out w-full  hover:bg-[#3f3f3f]`}>
					<Mail className={`text-white`} size="20" />
					<span className={`text-white xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Support</span>
				</Link>
				<Link href="#" className={`flex shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out w-full  hover:bg-[#3f3f3f]`}>
					<Share2 className={`text-white`} size="20" />
					<span className={`text-white xs:flex hidden items-center gap-1 md:hidden xl:flex`}>Share</span>
				</Link> */}
				<Link href="/logout" className={`flex w-full shrink-0 gap-3 rounded-md px-4 py-1.5 text-xs font-semibold duration-300 ease-in-out  hover:bg-[#3f3f3f]`}>
					<LogOut className={`text-white`} size="20" />
					<span className={`xs:flex hidden items-center gap-1 text-white md:hidden xl:flex`}>Logout</span>
				</Link>
			</div>
		</div>
	);
}

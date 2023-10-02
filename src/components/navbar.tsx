"use client";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext"; // Adjust the import path
import { Bell } from "react-feather";

const colorModes = {
	"bg-[#1c1c1c]": "[#cccccc]",
	"bg-[#cccccc]": "[#1c1c1c]",
};

function getContrastColor(currentMode, inverse = false) {
	const color = colorModes[currentMode];
	if (!color) return currentMode; // Return original mode if not found in the map

	if (inverse) {
		return currentMode === "bg-[#1c1c1c]" ? "[#cccccc]" : "[#1c1c1c]";
	}
	return color;
}

export default function NavBar() {
	const { mode, toggleMode } = useTheme();

	const color = getContrastColor(mode);
	const inverseColor = getContrastColor(mode, true);

	return (
		<div className={`sticky top-0 z-10 flex w-full items-center justify-between bg-${inverseColor} md:min-h-[4rem]`}>
			<h3 className={`flex w-full justify-start text-xl font-bold text-${color}`}>emailmework.com</h3>
			<div className="flex w-full items-center justify-end">
				<button type="button" className="bg-brown-600 hover:bg-brown-500 focus-visible:outline-brown-600 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
					Get Leads
				</button>
				<Link href="#" className={`flex items-center justify-end rounded-md px-4 text-xs font-semibold shadow-sm`}>
					<div className="flex items-center">
						<div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#333333]">
							<Bell className={`text-${color}`} size="18" />
							<div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white dark:border-gray-900">20</div>
						</div>
					</div>
				</Link>
				<Link href="#" className={`flex items-center justify-end rounded-md pr-4 text-xs font-semibold shadow-sm`}>
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

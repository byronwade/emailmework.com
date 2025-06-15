// components/NavItem.js
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, text, className }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={`
				px-3 py-1.5 text-sm rounded transition-colors duration-150
				${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"} 
				${className}
			`}
		>
			{text}
		</Link>
	);
}

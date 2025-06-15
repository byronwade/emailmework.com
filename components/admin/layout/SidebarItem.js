// components/SidebarItem.js
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({ href, text, className }) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={`
				block py-1.5 px-2 text-sm text-right rounded transition-colors duration-150
				${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"} 
				${className}
			`}
		>
			{text}
		</Link>
	);
}

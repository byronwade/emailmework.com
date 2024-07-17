// components/NavItem.js
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, text, className }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={`px-2 py-1 text-sm ${isActive ? "bg-blue-200 rounded-md text-brand" : "text-gray-600"} ${className}`}>
			{text}
		</Link>
	);
}

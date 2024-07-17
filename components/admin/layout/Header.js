// components/Header.js
import NavItem from "@/components/shared/layout/NavItem";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4">
			<div className="flex flex-row space-x-1">
				<div className="flex items-center p-2 space-x-2 text-black bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-200">
					<div className="w-8 h-8 bg-gray-400 rounded-md" />
					<div className="text-sm">
						<div>Wade&apos;s Inc</div>
						<div className="text-xs text-gray-500">Wade&apos;s Plumbing & Septic</div>
					</div>
				</div>
				<div className="flex items-center p-2 space-x-2 text-black bg-gray-200 rounded-lg cursor-pointer hover:bg-blue-200">
					<div className="w-8 h-8 bg-gray-400 rounded-md" />
					<div className="text-sm">
						<div>Byron</div>
						<div className="text-xs text-gray-500">Wade</div>
					</div>
				</div>
			</div>
			<nav className="flex items-center space-x-4">
				<NavItem href="/admin" text="Dashboard" />
				{/* <NavItem href="/admin/phone" text="Phone" /> */}
				<NavItem href="/admin/users" text="Users" />
				<NavItem href="/admin/pro-accounts" text="Pro Accounts" />
				<NavItem href="/admin/support" text="Support" />
				<NavItem href="/admin/billing" text="Billing" />
				<NavItem href="/admin/settings" text="Settings" />
			</nav>
		</header>
	);
}

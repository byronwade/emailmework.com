// components/Header.js
import NavItem from "@/components/shared/layout/NavItem";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Building2, User } from "lucide-react";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4">
			<div className="flex flex-row space-x-2">
				{/* Company Card */}
				<Card className="flex items-center p-2 px-3 space-x-2 text-black bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors duration-200 border-0">
					<div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-md">
						<Building2 className="w-4 h-4 text-white" />
					</div>
					<CardContent className="p-0 text-xs">
						<div className="font-semibold text-black">Wade&apos;s Inc</div>
						<div className="text-xs text-gray-600">Wade&apos;s Plumbing & Septic</div>
					</CardContent>
					<ChevronDown className="w-3 h-3 text-gray-500" />
				</Card>

				{/* User Card */}
				<Card className="flex items-center p-2 px-3 space-x-2 text-black bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors duration-200 border-0">
					<div className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-md">
						<User className="w-4 h-4 text-white" />
					</div>
					<CardContent className="p-0 text-xs">
						<div className="font-semibold text-black">Byron Wade</div>
						<div className="text-xs text-gray-600">Administrator</div>
					</CardContent>
					<ChevronDown className="w-3 h-3 text-gray-500" />
				</Card>
			</div>

			<nav className="flex items-center space-x-4">
				<NavItem href="/admin" text="Dashboard" />
				<NavItem href="/admin/users" text="Users" />
				<NavItem href="/admin/pro-accounts" text="Pro Accounts" />
				<NavItem href="/admin/support" text="Support" />
				<NavItem href="/admin/billing" text="Billing" />
				<NavItem href="/admin/settings" text="Settings" />
			</nav>
		</header>
	);
}

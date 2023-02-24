interface NavigationItem {
	name: string;
	href: string;
	current: boolean;
	onClick: boolean;
}

const navigation: NavigationItem[] = [
	{ name: "Dashboard", href: "/companies", onClick: true, current: true },
	{ name: "Work", href: "/companies/work", onClick: true, current: false },
	{ name: "Orders", href: "/companies/orders", onClick: true, current: false },
	{ name: "Profile", href: "/companies/profile", onClick: true, current: false },
	{ name: "Settings", href: "/companies/settings", onClick: true, current: false },
];

const userNavigation: NavigationItem[] = [
	{ name: "Your Profile", href: "#", onClick: true, current: false },
	{ name: "Settings", href: "#", onClick: true, current: false },
	{ name: "Sign out", href: "#", onClick: true, current: false },
];

export { navigation, userNavigation };

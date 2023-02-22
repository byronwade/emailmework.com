const navigation = [
	{ name: "Dashboard", href: "/companies", current: true },
	{ name: "Work", href: "/companies/work", current: false },
	{ name: "Orders", href: "/companies/orders", current: false },
	{ name: "Profile", href: "/companies/profile", current: false },
	{ name: "Settings", href: "/companies/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: true },
	{ name: "Settings", href: "#", onClick: true },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

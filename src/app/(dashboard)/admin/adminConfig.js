const navigation = [
	{ name: "Dashboard", href: "/admin", current: true },
	{ name: "Jobs", href: "/admin/jobs", current: false },
	{ name: "Companies", href: "/admin/companies", current: false },
	{ name: "Orders", href: "/admin/orders", current: false },
	{ name: "Settings", href: "/admin/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: true },
	{ name: "Settings", href: "#", onClick: true },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

const navigation = [
	{ name: "Dashboard", href: "/clients", current: true },
	{ name: "Jobs", href: "/clients/jobs", current: false },
	{ name: "Orders", href: "/clients/orders", current: false },
	{ name: "Settings", href: "/clients/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: false },
	{ name: "Settings", href: "#", onClick: false },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

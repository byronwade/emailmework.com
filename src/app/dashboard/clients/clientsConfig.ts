const navigation = [
	{ name: "Dashboard", href: "/dashboard/clients", current: true },
	{ name: "Jobs", href: "/dashboard/clients/jobs", current: false },
	{ name: "Orders", href: "/dashboard/clients/orders", current: false },
	{ name: "Settings", href: "/dashboard/clients/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: false },
	{ name: "Settings", href: "#", onClick: false },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

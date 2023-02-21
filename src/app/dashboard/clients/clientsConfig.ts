const navigation = [
	{ name: "Dashboard", href: "/dashboard/companies", current: true },
	{ name: "Jobs", href: "/dashboard/companies/orders", current: false },
	{ name: "Orders", href: "/dashboard/companies/work", current: false },
	{ name: "Settings", href: "/dashboard/companies/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: false },
	{ name: "Settings", href: "#", onClick: false },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

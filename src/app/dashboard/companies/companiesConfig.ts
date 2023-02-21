const navigation = [
	{ name: "Dashboard", href: "/dashboard/companies", current: true },
	{ name: "Work", href: "/dashboard/companies/orders", current: false },
	{ name: "Orders", href: "/dashboard/companies/work", current: false },
	{ name: "Profile", href: "/dashboard/companies/profile", current: false },
	{ name: "Settings", href: "/dashboard/companies/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: true },
	{ name: "Settings", href: "#", onClick: true },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

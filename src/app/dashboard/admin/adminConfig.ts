const navigation = [
	{ name: "Dashboard", href: "/dashboard/admin", current: true },
	{ name: "Jobs", href: "/dashboard/admin/jobs", current: false },
	{ name: "Company Profiles", href: "/dashboard/admin/companyprofiles", current: false },
	{ name: "Orders", href: "/dashboard/admin/orders", current: false },
	{ name: "Settings", href: "/dashboard/admin/settings", current: false },
];

const userNavigation = [
	{ name: "Your Profile", href: "#", onClick: true },
	{ name: "Settings", href: "#", onClick: true },
	{ name: "Sign out", href: "#", onClick: true },
];

export { navigation, userNavigation };

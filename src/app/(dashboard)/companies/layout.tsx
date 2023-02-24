import Header from "@dashboard/Header/Header";
import { ReactNode } from "react";
import { navigation, userNavigation } from "./companiesConfig";

interface CompaniesLayoutProps {
	children: ReactNode;
}

export default function CompaniesLayout({ children }: CompaniesLayoutProps) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}

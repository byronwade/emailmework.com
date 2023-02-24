import Header from "@/src/components/Dashboard/Header/Header";
import { navigation, userNavigation } from "./adminConfig";
import { ReactNode } from "react";

interface AdminLayoutProps {
	children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}

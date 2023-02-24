import Header from "@/src/components/Dashboard/Header/Header";
import { ReactNode } from "react";
import { navigation, userNavigation } from "./clientsConfig";

interface ClientLayoutProps {
	children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}


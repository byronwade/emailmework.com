import Header from "@/src/components/Dashboard/Header/Header";
import { navigation, userNavigation } from "./clientsConfig";

export default function ClientsLayout({ children }) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}

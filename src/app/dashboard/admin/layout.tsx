import Header from "@components/Dashboard/Header/Header";
import { navigation, userNavigation } from "./adminConfig";

export default function AdminLayout({ children }) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}

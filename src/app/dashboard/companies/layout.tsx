import Header from "@components/Dashboard/Header/Header";
import { navigation, userNavigation } from "./companiesConfig";

export default function CompaniesLayout({ children }) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">{children}</div>
		</>
	);
}

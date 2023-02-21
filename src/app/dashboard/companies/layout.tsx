import Header from "@components/Dashboard/Header/Header";
import { navigation, userNavigation } from "./companiesConfig";

export default function CompaniesLayout({ children }) {
	return (
		<>
			<Header navigation={navigation} userNavigation={userNavigation} />
			<div className="min-h-full">
				<div className="py-10">
					<header>
						<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
						</div>
					</header>
					<main>
						<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">{children}</div>
					</main>
				</div>
			</div>
		</>
	);
}

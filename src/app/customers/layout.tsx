import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<div className="w-full">
			<Navbar />
			<div className="container mx-auto overflow-auto">{children}</div>
		</div>
	);
}

import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<div className="w-full">
			<Navbar />
			<div className="flex h-screen flex-col text-white">{children}</div>
		</div>
	);
}

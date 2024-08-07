"use client";
import Header from "@/components/pros/layout/Header";

export default function ProsRootLayout({ children }) {
	return (
		<div className="flex flex-col min-h-screen m-auto max-w-screen-2xl">
			<Header />
			<div className="flex flex-1">{children}</div>
		</div>
	);
}

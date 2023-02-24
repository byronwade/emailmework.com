"use client";
import Header from "@website/Header/Header";
import Footer from "@website/Footer/Footer";

export default function WebsitePagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
            <Header />
		    {children}
            <Footer />
		</>
	);
}

// components/site/Header.js
import React from "react";
import { Menu, User } from "react-feather";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

const PublicHeader = () => {
	return (
		<header className="container flex items-center h-14 max-w-screen-2xl">
			<div className="flex items-center justify-between flex-1 space-x-2 md:justify-start">
				<Link href="/" className="flex items-center mr-4 space-x-2 lg:mr-6">
					<Menu className="w-6 h-6" />
					<span className="font-extrabold lg:inline-block">EmailMeWork</span>
				</Link>
				<nav className="items-center hidden gap-4 text-sm md:flex lg:gap-6">
					<Link href="/find-pros" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Find Pros
					</Link>
					<Link href="/how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">
						How It Works
					</Link>
					<Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
						About
					</Link>
					<Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Contact
					</Link>
				</nav>
			</div>
			<div className="flex items-center justify-between flex-1 space-x-2 md:justify-end">
				<button className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground">
					<User className="w-4 h-4" />
					<span className="sr-only">User Menu</span>
				</button>
				<Button variant="outline">Pro Login</Button>
				<Button variant="outline">Pro Sign Up</Button>
			</div>
		</header>
	);
};

export default PublicHeader;

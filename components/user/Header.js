// components/PublicHeader.js

import React from "react";
import Link from "next/link";

const PublicHeader = () => {
	return (
		<header className="container flex items-center h-14 max-w-screen-2xl">
			<div className="flex items-center justify-between flex-1 space-x-2 md:justify-start">
				<Link href="/" className="flex items-center mr-4 space-x-2 lg:mr-6">
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
				<Link href="/login" className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground">
					Login
				</Link>
				<Link href="/register" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground">
					Sign Up
				</Link>
			</div>
		</header>
	);
};

export default PublicHeader;

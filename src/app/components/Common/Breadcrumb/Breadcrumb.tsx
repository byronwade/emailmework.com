"use client";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function PageHeader({ breadTrail }) {
	console.log(breadTrail);
	return breadTrail ? (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<a href="#" className="text-gray-400 hover:text-gray-500">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				{breadTrail?.map((trail) => (
					<li key={trail}>
						<div className="flex items-center">
							<svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
								<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
							</svg>
							<Link href={trail.link} className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
								{trail.name}
							</Link>
						</div>
					</li>
				))}
			</ol>
		</nav>
	) : null;
}

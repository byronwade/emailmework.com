"use client";
import Link from "next/link";
import Breadcrumb from "../../Common/Breadcrumb/Breadcrumb";

export default function PageHeader({ pageTitle, buttons, breadTrail }) {
	return (
		<div>
			<Breadcrumb breadTrail={breadTrail} />
			<div className="mt-2 md:flex md:items-center md:justify-between">
				<div className="min-w-0 flex-1">
					<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{pageTitle}</h2>
				</div>
				{buttons ? (
					<div className="mt-4 flex flex-shrink-0 md:mt-0 md:ml-4">
						{buttons.map(
							(button) => (
								console.log(button),
								(
									<Link
										key={button?.name}
										href={`${button?.link}`}
										type="button"
										className={
											button.color === "white"
												? "inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												: button.color === "primary"
												? "ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
												: undefined
										}
									>
										{button?.name}
									</Link>
								)
							)
						)}
					</div>
				) : null}
			</div>
		</div>
	);
}

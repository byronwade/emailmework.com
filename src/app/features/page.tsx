"use client";
import Image from "next/image";
import WebsitePagesLayout from "../WebsitePagesLayout";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckIcon } from "@heroicons/react/20/solid";

const features1 = [
	{
		name: "Push to deploy.",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "SSL certificates.",
		description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: LockClosedIcon,
	},
	{
		name: "Database backups.",
		description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon,
	},
];

const features2 = [
	{
		name: "Invite team members",
		description: "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
	},
	{ name: "List view", description: "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut." },
	{
		name: "Keyboard shortcuts",
		description: "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
	},
	{
		name: "Calendars",
		description: "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.",
	},
	{ name: "Notifications", description: "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci." },
	{ name: "Boards", description: "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi." },
	{
		name: "Reporting",
		description: "Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.",
	},
	{
		name: "Mobile app",
		description: "Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.",
	},
];

export default function Features() {
	return (
		<>
			<WebsitePagesLayout>
				<section className="overflow-hidden bg-gray-900 py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="lg:pr-8 lg:pt-4">
								<div className="lg:max-w-lg">
									<h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
									<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better workflow</p>
									<p className="mt-6 text-lg leading-8 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
										{features1.map((feature) => (
											<div key={feature.name} className="relative pl-9">
												<dt className="inline font-semibold text-white">
													<feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
													{feature.name}
												</dt>{" "}
												<dd className="inline">{feature.description}</dd>
											</div>
										))}
									</dl>
								</div>
							</div>
							<Image src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width={2432} height={1442} />
						</div>
					</div>
				</section>
				<section className="bg-white py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							<div>
								<h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
								<p className="mt-6 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
							</div>
							<dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
								{features2.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="font-semibold text-gray-900">
											<CheckIcon className="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
											{feature.name}
										</dt>
										<dd className="mt-2">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
				</section>
			</WebsitePagesLayout>
		</>
	);
}
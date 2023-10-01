"use client";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; // Corrected import
import { getAuth, signOut } from "firebase/auth";
import MainMenu from "@/components/mainMenu";
import { useTheme } from "@/context/ThemeContext";
import NavBar from "@/components/navbar";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const statuses = {
	Complete: "text-green-700 bg-green-50 ring-green-600/20",
	"In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
	Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const projects = [
	{
		id: 1,
		name: "GraphQL API",
		href: "#",
		status: "Complete",
		createdBy: "Leslie Alexander",
		dueDate: "March 17, 2023",
		dueDateTime: "2023-03-17T00:00Z",
	},
	{
		id: 2,
		name: "New benefits plan",
		href: "#",
		status: "In progress",
		createdBy: "Leslie Alexander",
		dueDate: "May 5, 2023",
		dueDateTime: "2023-05-05T00:00Z",
	},
	{
		id: 3,
		name: "Onboarding emails",
		href: "#",
		status: "In progress",
		createdBy: "Courtney Henry",
		dueDate: "May 25, 2023",
		dueDateTime: "2023-05-25T00:00Z",
	},
	{
		id: 4,
		name: "iOS app",
		href: "#",
		status: "In progress",
		createdBy: "Leonard Krasner",
		dueDate: "June 7, 2023",
		dueDateTime: "2023-06-07T00:00Z",
	},
	{
		id: 5,
		name: "Marketing site redesign",
		href: "#",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 6,
		name: "Marketing site redesign",
		href: "#",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 7,
		name: "Marketing site redesign",
		href: "#",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
	{
		id: 8,
		name: "Marketing site redesign",
		href: "#",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function Dashboard() {
	const { user } = useAuthContext();
	const router = useRouter();
	const auth = getAuth();
	const { mode } = useTheme(); // Destructure mode from useTheme

	// Determine text color based on mode
	const color = mode === "bg-[#1c1c1c]" ? "text-white" : "text-black";

	useEffect(() => {
		if (user == null) router.push("/");
	}, [user]);

	return (
		<main className="h-full overflow-y-hidden">
			<div className="xs:flex-col flex h-full w-full overflow-y-auto md:flex-row">
				<MainMenu />
				<div className="w-full px-4">
					<NavBar />
					<div className="py-4">
						<div class="bg-primary-600 rounded-md bg-[url('https://mannatthemes.com/aabiz/default/assets/images/widgets/web-bg.png')] bg-cover p-8 text-center">
							<h3 class="mb-2 text-[30px] font-medium text-white">52021</h3>
							<p class="mb-4 text-lg uppercase text-slate-200">Organic Search</p>
							<p class="px-5 text-base text-slate-300">Measures your user's sources that generate traffic metrics to your website for this month</p>
							<button type="button" class="mt-6 rounded border  border-gray-100 bg-gray-100 px-2  py-1  text-sm font-medium text-blue-700 transition focus:z-10 focus:outline-none dark:border-gray-100 dark:bg-gray-100 dark:text-blue-700  lg:px-4 ">
								Learn More
							</button>
						</div>

						<h1 className={`${color}`}>Are you looking for work or looking for a contractor?</h1>
						<button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">get leads</button>
						<button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">get contractors</button>
						{/* <h1 className={`${color}`}>Only logged in users can view this page</h1>
						<button className={`${color}`} onClick={() => signOut(auth)}>
							Sign Out
						</button> */}

						<ul role="list" className="">
							{projects.map((project) => (
								<li key={project.id} className="flex items-center justify-between gap-x-6 py-5">
									<div className="min-w-0">
										<div className="flex items-start gap-x-3">
											<p className={`text-sm font-semibold leading-6 ${color}`}>{project.name}</p>
											<p className={classNames(statuses[project.status], "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset")}>{project.status}</p>
										</div>
										<div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
											<p className="whitespace-nowrap">
												Due on <time dateTime={project.dueDateTime}>{project.dueDate}</time>
											</p>
											<svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
												<circle cx={1} cy={1} r={1} />
											</svg>
											<p className="truncate">Created by {project.createdBy}</p>
										</div>
									</div>
									<div className="flex flex-none items-center gap-x-4">
										<a href={project.href} className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">
											View project<span className="sr-only">, {project.name}</span>
										</a>
										<Menu as="div" className="relative flex-none">
											<Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
												<span className="sr-only">Open options</span>
												<EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
											</Menu.Button>
											<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
												<Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
													<Menu.Item>
														{({ active }) => (
															<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																Edit<span className="sr-only">, {project.name}</span>
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																Move<span className="sr-only">, {project.name}</span>
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																Delete<span className="sr-only">, {project.name}</span>
															</a>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dashboard;

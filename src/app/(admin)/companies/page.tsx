import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { Calendar, Shield } from "react-feather";
import MenuBar from "../../../components/MenuBar/MenuBar";
import { DataTable } from "../../../components/Leads";

export const dynamic = "force-dynamic";

export const payments = [
	{
		id: "728ed52f",
		amount: 100,
		status: "pending",
		email: "m@example.com",
	},
	{
		id: "489e1d42",
		amount: 125,
		status: "processing",
		email: "example@gmail.com",
	},
	// ...
];

export const columns = [
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "amount",
		header: "Amount",
	},
];

export default async function Index() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();
	console.log(user);

	return (
		<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<MenuBar />
				<div className="mb-8 flex flex-col justify-between gap-x-4 gap-y-2 md:flex-row">
					<div className="flex pr-4">
						<div className="flex items-center space-x-2">
							<h1 className="flex items-center space-x-1 text-2xl font-semibold">
								<span>Wade&#39;s Plumbing & Septic</span>
							</h1>
							<div className="flex items-center space-x-1">
								<div className="text-primary inline-flex items-center space-x-1 rounded-full border border-dark/20 dark:border-white/20 bg-dark dark:bg-white px-2 text-sm font-medium">
									<div className="whitespace-nowrap pt-px text-white dark:text-dark">Free</div>
								</div>
								<a className="text-xs font-medium text-blue-400" href="#">
									Upgrade
								</a>
							</div>
						</div>
					</div>
					<div className="w-auto space-x-2">
						<button type="button" className="focus-ring hover:bg-brown-600/10 text-primary bg-primary relative box-border inline-flex shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-4 py-2 text-center font-semibold leading-none no-underline transition">
							New branch
						</button>
						<button type="button" className="focus-ring relative box-border inline-flex shrink-0 cursor-pointer select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-transparent bg-gray-800 px-4 py-2 text-center font-semibold leading-none text-gray-50 no-underline transition hover:bg-gray-900 hover:text-white dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900">
							Connect
						</button>
					</div>
				</div>

				<div className="mb-8 flex flex-col items-stretch gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0 xl:gap-x-6">
					<div className="flex flex-col lg:w-2/3">
						<DataTable columns={columns} data={payments} />
					</div>
					<div className="lg:w-1/3">
						<div className="space-y-8">
							<div className="rounded border boder-dark/20 dark:border-white/20">
								<div className="grid grid-flow-col gap-1">
									<div className="flex justify-between border-b boder-dark/20 dark:border-white/20 text-center">
										<a className="text-primary hover:bg-brown-600/10 flex flex-1 flex-col justify-self-center rounded-l border-r border-dark/20 dark:border-white/20 py-2.5 text-center">Table A</a>
										<a className="text-primary hover:bg-brown-600/10 flex flex-1 flex-col space-y-1 justify-self-center rounded-r py-2.5 text-center">Branch B</a>
									</div>
								</div>
								<div className="flex justify-around py-3">
									<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic A</div>
									<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic B</div>
									<div className="flex shrink-0 grow-0 basis-1/3 flex-col items-center justify-center space-y-1">Statistic C</div>
								</div>
								<div className="bg-brown-600/5 rounded-b border-t border-dark/20 dark:border-white/20 px-4 py-2 text-xs">
									<p>
										Usage as of{" "}
										<time dateTime="2023-10-04T05:00:00.000Z" title="October 3, 2023, 10:00:00 PM PDT">
											33 minutes ago
										</time>{" "}
										<span className="text-gray-400">(updated hourly)</span>
									</p>
									<p className="text-gray-400">
										Monthly usage resets in 27 days.{" "}
										<Link className="text-blue-400" href="/bcw1995/byronwade-com/settings/plans">
											Manage plan
										</Link>
									</p>
								</div>
							</div>
							<a className="space-x-2-box-border focus-ring hover:bg-brown-600/10text-white relative inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-dark/20 dark:border-white/20 px-2 py-1.5 text-center font-semibold leading-none no-underline transition">View More Details</a>
							<div className="text-white border-brown-700 bg-brown-950 space-y-4 rounded border p-3">
								<h3 className="text-lg font-semibold">This database has no production branches</h3>
								<p>Production branches have an additional replica used for high availability as well as zero-downtime upgrades and failovers. </p>
								<form action="https://api.planetscale.com/v1/organizations/bcw1995/databases/byronwade-com/branches/main/promote" method="post">
									<button type="submit" className="space-x-2-box-border focus-ring hover:bg-brown-600/10 text-white relative inline-flex w-full shrink-0 select-none items-center justify-center overflow-hidden whitespace-nowrap rounded border border-white/20 px-2 py-1.5 text-center font-semibold leading-none no-underline transition">
										<Shield width={16} height={16} className="mr-1 text-green-600" />
										Promote to production
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

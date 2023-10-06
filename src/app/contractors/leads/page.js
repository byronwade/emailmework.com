"use client";

export default function Leads() {
	return (
		<div className="mx-auto w-full flex-1 px-6 py-8 sm:px-12 sm:py-12">
			<div className="mx-auto h-full max-w-7xl">
				<div classname="mb-6 overflow-x-auto">
					<table classname="w-full">
						<thead>
							<tr className="border-white/20">
								<th scope="border-white/20">Branch</th>
								<th scope="border-white/20">Region</th>
								<th scope="border-white/20">Updated</th>
								<th scope="border-white/20">Created</th>
								<th scope="border-white/20" />
							</tr>
						</thead>
						<tbody>
							<tr classname="border-white/20 hover:bg-[#1c1c1c]">
								<td classname="w-1/2 rounded-l p-0 border-white/20">
									<a classname="group relative block py-0 pl-2" href="/bcw1995/byronwade-com/main" style={{ zIndex: 30 }}>
										<div classname="relative flex items-center space-x-1 py-2" style={{ paddingLeft: 0 }}>
											<div classname="relative">
												<div classname="text-blue dark:group-hover:ring-gray-850 flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white group-hover:ring-gray-50 dark:bg-blue-800 dark:text-white dark:ring-gray-900">
													<svg width={16} height={16}>
														<use href="/_next/static/media/icons.f95cb430.svg#branch" />
													</svg>
												</div>
											</div>
											<div classname="flex h-3 items-center">
												<span classname="text-purple !text-primary whitespace-nowrap font-mono font-medium">main</span>
											</div>
										</div>
									</a>
								</td>
								<td classname="w-1/6 whitespace-nowrap p-0">
									<a classname="text-primary font-medium" href="/bcw1995/byronwade-com/main">
										AWS us-east-1
									</a>
								</td>
								<td classname="w-1/6 whitespace-nowrap p-0">
									<a classname="text-[#ccc] block p-2" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-10-06T03:51:19.058Z" title="October 5, 2023, 8:51:19 PM PDT">
											14 minutes ago
										</time>
									</a>
								</td>
								<td classname="w-1/6 whitespace-nowrap p-0">
									<a classname="text-[#ccc] block p-2" href="/bcw1995/byronwade-com/main">
										<time dateTime="2023-02-05T00:04:45.610Z" title="February 4, 2023, 4:04:45 PM PST">
											8 months ago
										</time>
									</a>
								</td>
								<td classname="w-1/6 rounded-r text-right">
									<button>
										<div classname="text-blue-400 inline-flex h-[26px] items-center space-x-1 rounded-full border px-1.5 text-sm font-medium leading-none border-blue-700 bg-blue-950">
											<div classname="whitespace-nowrap pt-px">Default</div>
										</div>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

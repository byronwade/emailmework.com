"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import Test from "@components/Test";

export default function Jobs() {
	return (
		<div className="py-10">
			<main>
				<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
					<div className="pb-5 sm:flex sm:items-center sm:justify-between">
						<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Job Postings</h1>
						<div className="mt-3 sm:mt-0 sm:ml-4">
							<button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								Create new job
							</button>
						</div>
					</div>
					<div className="relative flex flex-col">
						{/* 3 column wrapper */}
						<div className="mx-auto w-full flex-grow lg:flex">
							{/* Left sidebar & main wrapper */}
							<div className="min-w-0 flex-1 bg-white xl:flex">
								<div className="bg-white xl:w-64 xl:flex-shrink-0">
									<div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
										{/* Start left column area */}
										<div className="relative h-full" style={{ minHeight: "12rem" }}>
											<div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-200" />
										</div>
										{/* End left column area */}
									</div>
								</div>

								<div className="bg-white lg:min-w-0 lg:flex-1">
									<div className="h-full py-6 px-4 sm:px-6 lg:px-8">
										<div className="text-center">
											<svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
												<path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
											</svg>
											<h3 className="mt-2 text-sm font-medium text-gray-900">No Jobs</h3>
											<p className="mt-1 text-sm text-gray-500">Get started by creating a new jobs.</p>
											<div className="mt-6">
												<button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
													<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
													New Job
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="pr-4 sm:pr-6 lg:flex-shrink-0 lg:pr-8 xl:pr-0">
								<div className="h-full py-6 pl-6 lg:w-80">
									{/* Start right column area */}
									<div className="relative h-full" style={{ minHeight: "16rem" }}>
										<div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-200" />
									</div>
									{/* End right column area */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

"use client";
import Test from "@components/Test";

export default function Jobs() {
	return (
		<div className="py-10">
			<header>
				<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Settings</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
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
										{/* Start main area*/}
										<div className="relative h-full" style={{ minHeight: "36rem" }}>
											<div className="absolute inset-0 rounded-lg border-2 border-dashed border-gray-200" />
										</div>
										{/* End main area */}
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

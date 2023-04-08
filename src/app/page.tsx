"use client";
import Image from "next/image";

const faqs = [
	{
		id: 1,
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 2,
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 3,
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 4,
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		id: 5,
		question: "What's the best thing about Switzerland?",
		answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
];

export default function Home() {
	// const { loading, error, data } = useQuery(GET_CLIENTS);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error : {error.message}</p>;

	// const clients = data.clientsCollection.edges;
	// console.log(clients);

	return (
		<>
			{/* <div>
				{clients.map(({ node: { name, email, preferred_location, scoresCollection } }: { node: { name: string; email: string; preferred_location: string; scoresCollection: any } }) => (
					<div key={preferred_location}>
						<h2 className="h2">{name}</h2>
						<p>{email}</p>
						{scoresCollection.edges.map(({ node: { score } }: { node: { score: number } }) => (
							<div key={score}>{score}</div>
						))}
					</div>
				))}
			</div> */}

			<div className="isolate bg-gray-900">
				<main>
					<div className="relative py-24 sm:py-32 lg:pb-40">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl text-center">
								<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Data to enrich your online business</h1>
								<p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
										Get started
									</a>
									<a href="#" className="text-sm font-semibold leading-6 text-white">
										Learn more <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
							<Image src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width={2432} height={1442} className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24" />
						</div>
						<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
							<svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
								<path fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)" fillOpacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
								<defs>
									<linearGradient id="ee0717bf-3e43-49df-b1bd-de36422ed3d3" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
										<stop stopColor="#9089FC" />
										<stop offset={1} stopColor="#FF80B5" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</main>
			</div>

			<div className="bg-white">
				<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
						<p className="mt-6 text-base leading-7 text-gray-600">
							Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{" "}
							<a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
								sending us an email
							</a>{" "}
							and we’ll get back to you as soon as we can.
						</p>
					</div>
					<div className="mt-20">
						<dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
							{faqs.map((faq) => (
								<div key={faq.id}>
									<dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</>
	);
}

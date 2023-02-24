"use client";
import Header from "@/src/components/Website/Header/Header";
import { useQuery, gql } from "@apollo/client";

const GET_CLIENTS = gql`
	query {
		clientsCollection(first: 100) {
			edges {
				node {
					scoresCollection(first: 1) {
						edges {
							node {
								score
							}
						}
					}
					preferred_location
					name
					email
				}
			}
		}
	}
`;

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
	const { loading, error, data } = useQuery(GET_CLIENTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	const clients = data.clientsCollection.edges;
	console.log(clients);

	return (
		<>
			<Header />
			<div>
				{clients.map(({ node: { name, email, preferred_location, scoresCollection } }: { node: { name: string; email: string; preferred_location: string; scoresCollection: any } }) => (
					<div key={preferred_location}>
						<h2 className="h2">{name}</h2>
						<p>{email}</p>
						{scoresCollection.edges.map(({ node: { score } }: { node: { score: number } }) => (
							<div key={score}>{score}</div>
						))}
					</div>
				))}
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

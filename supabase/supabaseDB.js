import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL_BASE, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Insert fake clients
async function insertFakeClients(numClients) {
	const clients = [];

	for (let i = 0; i < numClients; i++) {
		clients.push({
			client_id: uuidv4(),
			name: faker.name.fullName(),
			email: faker.internet.email(),
			created_at: new Date(),
			updated_at: new Date(),
			phone_number: faker.phone.number(),
			profile_picture: faker.internet.avatar(),
			location: faker.address.city(),
			preferred_services: ["Cleaning", "Gardening"],
			preferred_location: faker.address.city(),
		});
	}

	const { data, error } = await supabase.from("clients").insert(clients);

	if (error) {
		console.error(error);
	} else {
		console.log(`${data.length} clients inserted successfully.`);
	}
}

// Insert fake companies
async function insertFakeCompanies(numCompanies) {
	const companies = [];

	for (let i = 0; i < numCompanies; i++) {
		companies.push({
			company_id: uuidv4(),
			name: faker.company.name(),
			email: faker.internet.email(),
			created_at: new Date(),
			updated_at: new Date(),
			company_structure: "LLC",
			company_ein: faker.finance.account(),
			company_license_number: faker.finance.account(),
			address: faker.address.streetAddress(),
			phone_number: faker.phone.number(),
			profile_picture: faker.internet.avatar(),
			company_website: faker.internet.url(),
			verified: true,
			slug: faker.lorem.slug(),
			link: faker.internet.url(),
			size: 100,
			founded: 2000,
			social_media: ["https://facebook.com", "https://twitter.com"],
		});
	}

	const { data, error } = await supabase.from("companies").insert(companies);

	if (error) {
		console.error(error);
	} else {
		console.log(`${data.length} companies inserted successfully.`);
	}
}

// Insert fake jobs
async function insertFakeJobs(numJobs) {
	const jobs = [];

	// Get list of clients from Supabase
	const { data: companies, error: companiesError } = await supabase.from("companies").select("company_id");
	const { data: clients, error: clientsError } = await supabase.from("clients").select("client_id");

	console.error(companiesError);
	console.error(clientsError);

	for (let i = 0; i < numJobs; i++) {
		const client = clients[Math.floor(Math.random() * clients.length)];
		const company = companies[Math.floor(Math.random() * companies.length)];

		jobs.push({
			jobs_id: uuidv4(),
			title: faker.lorem.words(),
			description: faker.lorem.paragraph(),
			posted_by: client.client_id,
			accepted_by: company.company_id,
			budget: faker.finance.amount(),
			location: faker.address.city(),
			status: "open",
			attachments: [faker.internet.url()],
			equipment_required: ["Hammer", "Screwdriver"],
			created_at: new Date(),
			updated_at: new Date(),
			industry: "Construction",
			category: ["Renovations"],
			tags: ["#construction", "#renovations"],
			slug: faker.lorem.slug(),
			views: faker.datatype.number(),
			link: "link is here",
			client_id: client.client_id,
			company_id: company.company_id,
			score: null,
		});
	}

	const { data, error: insertError } = await supabase.from("jobs").insert(jobs);

	if (insertError) {
		console.error(insertError);
	} else {
		console.log(`${data.length} jobs inserted successfully.`);
	}
}

// Insert fake orders
async function insertFakeOrders(numOrders) {
	const { data: companies, error } = await supabase.from("companies").select("company_id");

	if (error) {
		console.error(error);
		return;
	}

	const orders = [];

	for (let i = 0; i < numOrders; i++) {
		const company = companies[Math.floor(Math.random() * companies.length)];

		orders.push({
			order_id: uuidv4(),
			amount: faker.finance.amount(),
			created_at: new Date(),
			updated_at: new Date(),
			company_id: company.company_id,
		});
	}

	const { data, error: insertError } = await supabase.from("orders").insert(orders);

	if (insertError) {
		console.error(insertError);
	} else {
		console.log(`${data.length} orders inserted successfully.`);
	}
}

// Insert fake payments
async function insertFakePayments(numPayments) {
	const payments = [];

	// Fetch orders data from Supabase
	const { data: orders, error: ordersError } = await supabase.from("orders").select("order_id");

	if (ordersError) {
		console.error(ordersError);
		return;
	}

	for (let i = 0; i < numPayments; i++) {
		const order = orders[Math.floor(Math.random() * orders.length)];
		payments.push({
			payment_id: uuidv4(),
			amount: faker.finance.amount(),
			payment_method: "Credit Card",
			created_at: new Date(),
			updated_at: new Date(),
			order_id: order.order_id,
			status: "success",
		});
	}

	const { data, error } = await supabase.from("payments").insert(payments);

	if (error) {
		console.error(error);
	} else {
		console.log(`${data.length} payments inserted successfully.`);
	}
}

// Insert fake reviews
async function insertFakeReviews(numReviews) {
	const { data: companies, error: companiesError } = await supabase.from("companies").select("company_id");

	const { data: clients, error: clientsError } = await supabase.from("clients").select("client_id");

	if (companiesError) {
		console.error(companiesError);
		return;
	}

	if (clientsError) {
		console.error(clientsError);
		return;
	}

	const reviews = [];

	for (let i = 0; i < numReviews; i++) {
		const company = companies[Math.floor(Math.random() * companies.length)];
		const client = clients[Math.floor(Math.random() * clients.length)];
		reviews.push({
			review_id: uuidv4(),
			body: faker.lorem.paragraph(),
			rating: faker.datatype.number({ min: 1, max: 5 }),
			review_type: "company",
			slug: faker.lorem.slug(),
			link: faker.internet.url(),
			created_at: new Date(),
			updated_at: new Date(),
			company_id: company.company_id,
			client_id: client.client_id,
		});
	}

	const { data, error } = await supabase.from("reviews").insert(reviews);

	if (error) {
		console.error(error);
	} else {
		console.log(`${data.length} reviews inserted successfully.`);
	}
}

// Insert fake scores
async function insertFakeScores(numScores) {
	console.log("now?");
	const { data: jobs, error: jobsError } = await supabase.from("jobs").select("jobs_id");
	const { data: clients, error: clientsError } = await supabase.from("clients").select("client_id");
	const { data: companies, error: companiesError } = await supabase.from("companies").select("company_id");

	console.log(jobs);
	console.log(clients);
	console.log(companies);
	console.error(jobsError || clientsError || companiesError);

	const scores = [];

	for (let i = 0; i < numScores; i++) {
		const job = jobs[Math.floor(Math.random() * jobs.length)];
		const client = clients[Math.floor(Math.random() * clients.length)];
		const company = companies[Math.floor(Math.random() * companies.length)];

		scores.push({
			score_id: uuidv4(),
			score: faker.datatype.number({ min: 1, max: 10, precision: 1 }),
			created_at: new Date(),
			updated_at: new Date(),
			job_id: job.jobs_id,
			client_id: client.client_id,
			company_id: company.company_id,
		});
	}

	const { data, error } = await supabase.from("scores").insert(scores);

	console.error(error);
	console.log(`${data.length} scores inserted successfully.`);
}
// Insert fake notifications
async function insertFakeNotifications(numNotifications) {
	const { data: jobs, error: jobsError } = await supabase.from("jobs").select("jobs_id");
	const { data: companies, error: companiesError } = await supabase.from("companies").select("company_id");
	const { data: clients, error: clientsError } = await supabase.from("clients").select("client_id");

	if (jobsError) {
		console.error(jobsError);
		return;
	}

	if (companiesError) {
		console.error(companiesError);
		return;
	}

	if (clientsError) {
		console.error(clientsError);
		return;
	}

	const notifications = [];

	for (let i = 0; i < numNotifications; i++) {
		const job = jobs[Math.floor(Math.random() * jobs.length)];
		const client = clients[Math.floor(Math.random() * clients.length)];
		const company = companies[Math.floor(Math.random() * companies.length)];
		notifications.push({
			notification_id: uuidv4(),
			type: "job_notification",
			message: `You have a new job request from ${client.name} for ${job.title}`,
			created_at: new Date(),
			updated_at: new Date(),
			job_id: job.jobs_id,
			client_id: client.client_id,
			company_id: company.company_id,
		});
	}

	const { data, error } = await supabase.from("notifications").insert(notifications);

	if (error) {
		console.error(error);
	} else {
		console.log(`${data.length} notifications inserted successfully.`);
	}
}

// Call the functions to insert data into the tables
//insertFakeClients(100);
//insertFakeCompanies(50);

// Wait for the data to be i
//insertFakeJobs(20);
//insertFakeOrders(50);
//insertFakePayments(50);
//insertFakeReviews(50);
//insertFakeScores(50);
insertFakeNotifications(50);
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase.js";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

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

	try {
		const batch = db.batch();
		clients.forEach((client) => {
			const docRef = db.collection("clients").doc(client.client_id);
			batch.set(docRef, client);
		});
		await batch.commit();
		console.log(`${clients.length} clients inserted successfully.`);
	} catch (error) {
		console.error(error);
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

	try {
		const batch = db.batch();
		companies.forEach((company) => {
			const docRef = db.collection("companies").doc(company.company_id);
			batch.set(docRef, company);
		});
		await batch.commit();
		console.log(`${companies.length} companies inserted successfully.`);
	} catch (error) {
		console.error(error);
	}
}

// Insert fake jobs
async function insertFakeJobs(numJobs) {
	const jobs = [];

	// Get list of clients from Firestore
	const clientsSnapshot = await db.collection("clients").get();
	const clients = clientsSnapshot.docs.map((doc) => doc.data().client_id);

	// Get list of companies from Firestore
	const companiesSnapshot = await db.collection("companies").get();
	const companies = companiesSnapshot.docs.map((doc) => doc.data().company_id);

	for (let i = 0; i < numJobs; i++) {
		const client = clients[Math.floor(Math.random() * clients.length)];
		const company = companies[Math.floor(Math.random() * companies.length)];

		jobs.push({
			jobs_id: uuidv4(),
			title: faker.lorem.words(),
			description: faker.lorem.paragraph(),
			posted_by: client,
			accepted_by: company,
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
			client_id: client,
			company_id: company,
			score: null,
		});
	}

	// Insert jobs into Firestore
	const insertResult = await db.collection("jobs").add({ jobs });
	console.log(`${numJobs} jobs inserted successfully.`);
}

// Insert fake orders
async function insertFakeOrders(numOrders) {
	const companiesSnapshot = await db.collection("companies").get();
	const companies = companiesSnapshot.docs.map((doc) => doc.data());

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

	try {
		const batch = db.batch();
		orders.forEach((order) => {
			const docRef = db.collection("orders").doc(order.order_id);
			batch.set(docRef, order);
		});
		await batch.commit();
		console.log(`${orders.length} orders inserted successfully.`);
	} catch (error) {
		console.error(error);
	}
}

// Insert fake payments
async function insertFakePayments(numPayments) {
	const payments = [];

	// Fetch orders data from Firestore
	const ordersSnapshot = await db.collection("orders").get();
	const orders = ordersSnapshot.docs.map((doc) => ({ order_id: doc.id }));

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

	try {
		const { writeResult } = await db.collection("payments").add(payments);
		console.log(`${writeResult.writeResults.length} payments inserted successfully.`);
	} catch (error) {
		console.error(error);
	}
}

// Insert fake reviews
async function insertFakeReviews(numReviews) {
	const companiesSnapshot = await firestore.collection("companies").get();
	const companies = companiesSnapshot.docs.map((doc) => doc.data());

	const clientsSnapshot = await firestore.collection("clients").get();
	const clients = clientsSnapshot.docs.map((doc) => doc.data());

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

	const batch = firestore.batch();
	reviews.forEach((review) => {
		const reviewRef = firestore.collection("reviews").doc(review.review_id);
		batch.set(reviewRef, review);
	});

	try {
		await batch.commit();
		console.log(`${reviews.length} reviews inserted successfully.`);
	} catch (error) {
		console.error(error);
	}
}

// Insert fake scores
async function insertFakeScores(numScores) {
	const jobs = await db.collection("jobs").get();
	const clients = await db.collection("clients").get();
	const companies = await db.collection("companies").get();

	const scores = [];

	jobs.forEach((job) => {
		clients.forEach((client) => {
			companies.forEach((company) => {
				scores.push({
					score_id: uuidv4(),
					score: faker.datatype.number({ min: 1, max: 10, precision: 1 }),
					created_at: new Date(),
					updated_at: new Date(),
					job_id: job.id,
					client_id: client.id,
					company_id: company.id,
				});
			});
		});
	});

	try {
		const { writeBatch } = db;
		const batch = writeBatch();

		scores.forEach((score) => {
			const scoreRef = db.collection("scores").doc(score.score_id);
			batch.set(scoreRef, score);
		});

		await batch.commit();

		console.log(`${scores.length} scores inserted successfully.`);
	} catch (error) {
		console.error(error);
	}
}

// Insert fake notifications
async function insertFakeNotifications(numNotifications) {
	const jobsRef = db.collection("jobs");
	const companiesRef = db.collection("companies");
	const clientsRef = db.collection("clients");

	const jobsSnapshot = await jobsRef.get();
	const companiesSnapshot = await companiesRef.get();
	const clientsSnapshot = await clientsRef.get();

	const jobs = jobsSnapshot.docs.map((doc) => doc.id);
	const companies = companiesSnapshot.docs.map((doc) => doc.id);
	const clients = clientsSnapshot.docs.map((doc) => doc.id);

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
			job_id: job,
			client_id: client,
			company_id: company,
		});
	}

	try {
		const batch = db.batch();
		notifications.forEach((notification) => {
			const notificationRef = db.collection("notifications").doc();
			batch.set(notificationRef, notification);
		});
		await batch.commit();
		console.log(`${notifications.length} notifications inserted successfully.`);
	} catch (error) {
		console.error(error);
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
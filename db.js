import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase.js";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const jobID = uuidv4(); // Generate a unique job ID
const clientID = uuidv4(); // Generate a unique user ID
const companyID = uuidv4(); // Generate a unique user ID
const orderID = uuidv4(); // Generate a unique user ID

// Create "Admin Users" collection
const adminUsersCollection = collection(db, "Admin Users");

// Add fields to "Admin Users" collection
addDoc(adminUsersCollection, {
	name: faker.name.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
});

// Create "Companies" collection
const companiesCollection = collection(db, "Companies");

// Add fields to "Companies" collection
addDoc(companiesCollection, {
	name: faker.company.name(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
	company_structure: faker.company.companySuffix(),
	company_ein: faker.finance.routingNumber(),
	company_license_number: faker.random.alphaNumeric(),
	address: faker.address.streetAddress(),
	phone_number: faker.phone.number(),
	profile_picture: faker.image.imageUrl(),
	company_website: faker.internet.url(),
	score: faker.datatype.number({ min: 1, max: 100 }),
	orders: [orderID, orderID, orderID],
	jobs_accepted: [jobID, jobID, jobID, jobID, jobID],
});

// Create "Clients" collection
const clientsCollection = collection(db, "Clients");

// Add fields to "Clients" collection
addDoc(clientsCollection, {
	name: faker.name.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
	phone_number: faker.phone.number(),
	profile_picture: faker.image.imageUrl(),
	location: faker.address.streetAddress(),
	preferred_services: [faker.random.word(), faker.random.word(), faker.random.word()],
	preferred_location: faker.address.streetAddress(),
	score: faker.datatype.number({ min: 1, max: 100 }),
	orders: [orderID, orderID, orderID],
	jobs_posted: [jobID, jobID, jobID, jobID, jobID],
});

// Create "Jobs" collection
const jobsCollection = collection(db, "Jobs");

// Add fields to "Jobs" collection
addDoc(jobsCollection, {
	job_id: jobID,
	title: faker.name.jobTitle(),
	description: faker.lorem.sentence(),
	posted_by: clientID,
	accepted_by: companyID,
	budget: faker.datatype.number({ min: 50, max: 500 }),
	location: faker.address.streetAddress(),
	status: "open",
	attachments: [faker.image.imageUrl(), faker.image.imageUrl()],
	equipment_required: [faker.random.word(), faker.random.word(), faker.random.word()],
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
	category: faker.random.word(),
});

// Create "Job Scores" collection
const jobScoresCollection = collection(db, "Job Scores");

// Add fields to "Job Scores" collection
addDoc(jobScoresCollection, {
	job_id: jobID,
	client_id: clientID,
	score: faker.datatype.number({ min: 1, max: 100 }),
	created_at: serverTimestamp(),
});

// Create "Notifications" collection
const notificationsCollection = collection(db, "Notifications");

// Add fields to "Notifications" collection
addDoc(notificationsCollection, {
	recipient_id: clientID,
	sender_id: companyID,
	message: faker.lorem.sentence(),
	timestamp: serverTimestamp(),
});

// Create "Ratings & Reviews" collection
const ratingsReviewsCollection = collection(db, "Ratings & Reviews");

// Add fields to "Ratings & Reviews" collection
addDoc(ratingsReviewsCollection, {
	reviewer_id: clientID,
	reviewed_id: companyID,
	rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
	review_text: faker.lorem.paragraph(),
	created_at: serverTimestamp(),
});

// Create "Orders" collection
const ordersCollection = collection(db, "Orders");

// Add fields to "Orders" collection
addDoc(ordersCollection, {
	client_id: clientID,
	job_id: jobID,
	amount: faker.datatype.number({ min: 50, max: 1000, precision: 0.01 }),
	payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
	created_at: serverTimestamp(),
});

// Create "Payments" collection
const paymentsCollection = collection(db, "Payments");

// Add fields to "Payments" collection
addDoc(paymentsCollection, {
	order_id: orderID,
	client_id: clientID,
	company_id: companyID,
	job_id: jobID,
	amount: faker.datatype.number({ min: 1, max: 5000, precision: 0.01 }),
	payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
	created_at: serverTimestamp(),
	status: faker.helpers.arrayElement(["pending", "completed", "failed"]),
});

// Output success message
console.log("Firebase database created successfully!");

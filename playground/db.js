import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const jobID = uuidv4(); // Generate a unique job ID
const clientID = uuidv4(); // Generate a unique user ID
const companyID = uuidv4(); // Generate a unique user ID
const orderID = uuidv4(); // Generate a unique user ID
const adminID = uuidv4(); // Generate a unique user ID
const notificationID = uuidv4(); // Generate a unique user ID
const paymentID = uuidv4(); // Generate a unique user ID
const reviewID = uuidv4(); // Generate a unique user ID
const scoreID = uuidv4(); // Generate a unique user ID

let newCompanyID = "";
let newClientID = "";

// Create "Admin Users" collection
const adminUsersCollection = collection(db, "Admin Users");

// Add fields to "Admin Users" collection
addDoc(adminUsersCollection, {
	admin_id: adminID,
	name: faker.name.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
});

// Create "Companies" collection
const companiesCollection = collection(db, "Companies");

// Add fields to "Companies" collection
addDoc(companiesCollection, {
	company_id: companyID,
	name: faker.company.name(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
	company_structure: faker.company.companySuffix(),
	company_ein: faker.finance.routingNumber(),
	company_license_number: faker.random.alphaNumeric(),
	address: faker.address.streetAddress(),
	phone_number: faker.phone.number(),
	profile_picture: faker.image.imageUrl(),
	company_website: faker.internet.url(),
	score: scoreID,
	orders: [orderID, orderID, orderID],
	reviews: [reviewID, reviewID, reviewID],
	jobs_accepted: [jobID, jobID, jobID, jobID, jobID],
	verified: faker.datatype.boolean(),
	slug: faker.lorem.slug(),
	link: faker.internet.url(),
	size: faker.datatype.number({ min: 50, max: 500 }),
	founded: faker.datatype.number({ min: 1970, max: 2023 }),
	social_media: faker.helpers.arrayElement([faker.internet.url(), faker.internet.url(), faker.internet.url(), faker.internet.url()]),
});

// Create "Clients" collection
const clientsCollection = collection(db, "Clients");

// Add fields to "Clients" collection
addDoc(clientsCollection, {
	client_id: clientID,
	name: faker.name.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
	phone_number: faker.phone.number(),
	profile_picture: faker.image.imageUrl(),
	location: faker.address.streetAddress(),
	preferred_services: [faker.random.word(), faker.random.word(), faker.random.word()],
	preferred_location: faker.address.streetAddress(),
	score: scoreID,
	orders: [orderID, orderID, orderID],
	reviews: [reviewID, reviewID, reviewID],
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
	industry: faker.random.word(),
	category: faker.random.word(),
	tags: faker.random.word(),
	score: scoreID,
	slug: faker.lorem.slug(),
	views: faker.datatype.number({ min: 1, max: 9999 }),
	link: faker.internet.url(),
});

// Create "Job Scores" collection
const scoresCollection = collection(db, "Scores");

// Add fields to "Job Scores" collection
addDoc(scoresCollection, {
	score_id: scoreID,
	score: faker.datatype.number({ min: 1, max: 100 }),
	type: faker.helpers.arrayElement([jobID, clientID, companyID]),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
});

// Create "Notifications" collection
const notificationsCollection = collection(db, "Notifications");

// Add fields to "Notifications" collection
addDoc(notificationsCollection, {
	notification_id: notificationID,
	recipient_id: clientID,
	message: faker.lorem.sentence(),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
});

// Create "Ratings & Reviews" collection
const ratingsReviewsCollection = collection(db, "Ratings & Reviews");

// Add fields to "Ratings & Reviews" collection
addDoc(ratingsReviewsCollection, {
	review_id: reviewID,
	reviewer_id: faker.helpers.arrayElement([companyID, clientID]),
	reviewed_id: faker.helpers.arrayElement([clientID, companyID]),
	rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
	review_text: faker.lorem.paragraph(),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
	review_type: faker.helpers.arrayElement(["client_review", "company_review"]),
	slug: faker.lorem.slug(),
	link: faker.internet.url(),
});

// Create "Orders" collection
const ordersCollection = collection(db, "Orders");

// Add fields to "Orders" collection
addDoc(ordersCollection, {
	order_id: orderID,
	company_id: companyID,
	payment_id: paymentID,
	job_id: jobID,
	amount: faker.datatype.number({ min: 50, max: 1000, precision: 0.01 }),
	payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
});

// Create "Payments" collection
const paymentsCollection = collection(db, "Payments");

// Add fields to "Payments" collection
addDoc(paymentsCollection, {
	payment_id: paymentID,
	order_id: orderID,
	company_id: companyID,
	job_id: jobID,
	amount: faker.datatype.number({ min: 1, max: 5000, precision: 0.01 }),
	payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
	created_at: serverTimestamp(),
	updated_at: serverTimestamp(),
	status: faker.helpers.arrayElement(["pending", "completed", "failed"]),
});

// Output success message
console.log("Firebase database created successfully!");

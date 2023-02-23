import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://xwtiqquaggdkcgrrewgp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dGlxcXVhZ2dka2NncnJld2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwOTcwMzIsImV4cCI6MTk5MjY3MzAzMn0.Dsx5TnBbkunBf3fUf7rtQWpC5CFhC0bRkStK9LEUwBE");

const jobID = uuidv4().toString();
const clientID = uuidv4().toString();
const companyID = uuidv4().toString();
const orderID = uuidv4().toString();
const paymentID = uuidv4().toString();
const reviewID = uuidv4().toString();
const scoreID = uuidv4().toString();

(async () => {
	try {
		const { data: companies, error: companiesError } = await supabase.from("Companies").insert([
			{
				company_id: companyID,
				name: faker.company.name(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				created_at: new Date(),
				updated_at: new Date(),
				company_structure: faker.company.companySuffix(),
				company_ein: faker.finance.routingNumber(),
				company_license_number: faker.random.alphaNumeric(),
				address: faker.address.streetAddress(),
				phone_number: faker.phone.number(),
				profile_picture: faker.image.imageUrl(),
				company_website: faker.internet.url(),
				score: scoreID,
				orders: orderID,
				reviews: reviewID,
				jobs_accepted: jobID,
				verified: faker.datatype.boolean(),
				slug: faker.lorem.slug(),
				link: faker.internet.url(),
				size: faker.datatype.number({ min: 50, max: 500 }),
				founded: faker.datatype.number({ min: 1970, max: 2023 }),
				social_media: [faker.internet.url(), faker.internet.url(), faker.internet.url(), faker.internet.url()],
			},
		]);
		if (companiesError) throw companiesError;

		const { data: clients, error: clientsError } = await supabase.from("Clients").insert([
			{
				client_id: clientID,
				name: faker.name.fullName(),
				email: faker.internet.email(),
				password: faker.internet.password(),
				created_at: new Date(),
				updated_at: new Date(),
				phone_number: faker.phone.number(),
				profile_picture: faker.image.imageUrl(),
				location: faker.address.streetAddress(),
				preferred_services: [faker.random.word(), faker.random.word(), faker.random.word()],
				preferred_location: faker.address.streetAddress(),
				score: scoreID,
				orders: orderID,
				reviews: reviewID,
				jobs_posted: jobID,
			},
		]);
		if (clientsError) throw clientsError;

		const { data: scores, error: scoresError } = await supabase.from("Clients").insert([
			{
				score_id: scoreID,
				score: faker.datatype.number({ min: 1, max: 100 }),
				type: faker.helpers.arrayElement([jobID, clientID, companyID]),
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
		if (scoresError) throw scoresError;

		const { data: jobs, error: jobsError } = await supabase.from("Jobs").insert([
			{
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
				created_at: new Date(),
				updated_at: new Date(),
				industry: faker.random.word(),
				category: faker.random.word(),
				tags: faker.random.word(),
				score: scoreID,
				slug: faker.lorem.slug(),
				views: faker.datatype.number({ min: 1, max: 9999 }),
				link: faker.internet.url(),
			},
		]);
		if (jobsError) throw jobsError;

		const { data: orders, error: ordersError } = await supabase.from("Orders").insert([
			{
				order_id: orderID,
				company_id: companyID,
				payment_id: paymentID,
				job_id: jobID,
				amount: faker.datatype.number({ min: 50, max: 1000, precision: 0.01 }),
				payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
		if (ordersError) throw ordersError;

		const { data: reviews, error: ratingsError } = await supabase.from("Payments").insert([
			{
				review_id: reviewID,
				reviewer_id: faker.helpers.arrayElement([companyID, clientID]),
				reviewed_id: faker.helpers.arrayElement([clientID, companyID]),
				rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
				review_text: faker.lorem.paragraph(),
				created_at: new Date(),
				updated_at: new Date(),
				review_type: faker.helpers.arrayElement(["client_review", "company_review"]),
				slug: faker.lorem.slug(),
				link: faker.internet.url(),
			},
		]);

		if (ratingsError) throw ratingsError;
		const { data: payments, error: paymentsError } = await supabase.from("Payments").insert([
			{
				payment_id: paymentID,
				order_id: orderID,
				company_id: companyID,
				job_id: jobID,
				amount: faker.datatype.number({ min: 1, max: 5000, precision: 0.01 }),
				payment_method: faker.helpers.arrayElement(["credit card", "PayPal", "Apple Pay"]),
				created_at: new Date(),
				updated_at: new Date(),
				status: faker.helpers.arrayElement(["pending", "completed", "failed"]),
			},
		]);
		if (paymentsError) throw paymentsError;

		// Add the score to the jobs
		const { data: jobsScore, error: jobsScoreError } = await supabase.from("Jobs").update({ score: scoreID }).match({ job_id: jobID });

		if (jobsScoreError) throw jobsScoreError;

		// Add the score to the payments
		const { data: paymentsScore, error: paymentsScoreError } = await supabase.from("Payments").update({ score: scoreID }).match({ payment_id: paymentID });

		if (paymentsScoreError) throw paymentsScoreError;

		// Add the review to the companies
		const { data: companiesReview, error: companiesReviewError } = await supabase.from("Companies").update({ reviews: reviewID }).match({ company_id: companyID });

		if (companiesReviewError) throw companiesReviewError;

		// Add the review to the clients
		const { data: clientsReview, error: clientsReviewError } = await supabase.from("Clients").update({ reviews: reviewID }).match({ client_id: clientID });

		if (clientsReviewError) throw clientsReviewError;

		// Add the order to the payments
		const { data: paymentsOrder, error: paymentsOrderError } = await supabase.from("Payments").update({ order_id: orderID }).match({ payment_id: paymentID });

		if (paymentsOrderError) throw paymentsOrderError;

		// Add the job to the payments
		const { data: paymentsJob, error: paymentsJobError } = await supabase.from("Payments").update({ job_id: jobID }).match({ payment_id: paymentID });

		if (paymentsJobError) throw paymentsJobError;

		// Add the order to the companies
		const { data: companiesOrder, error: companiesOrderError } = await supabase
			.from("Companies")
			.update({ orders: [orderID] })
			.match({ company_id: companyID });

		if (companiesOrderError) throw companiesOrderError;

		// Add the job to the companies
		const { data: companiesJob, error: companiesJobError } = await supabase
			.from("Companies")
			.update({ jobs_accepted: `{${jobID},${jobID},${jobID},${jobID},${jobID}}` })
			.match({ company_id: companyID });

		if (companiesJobError) throw companiesJobError;

		// Add the order to the jobs
		const { data: jobsOrder, error: jobsOrderError } = await supabase
			.from("Jobs")
			.update({ orders: [orderID] })
			.match({ job_id: jobID });

		if (jobsOrderError) throw jobsOrderError;

		// Add the review to the jobs
		const { data: jobsReview, error: jobsReviewError } = await supabase
			.from("Jobs")
			.update({ reviews: [reviewID] })
			.match({ job_id: jobID });

		if (jobsReviewError) throw jobsReviewError;

		// Add the review to the companies
		const { data: companiesReview2, error: companiesReview2Error } = await supabase
			.from("Companies")
			.update({ reviews: [reviewID] })
			.match({ company_id: companyID });

		if (companiesReview2Error) throw companiesReview2Error;

		// Add the review to the clients
		const { data: clientsReview2, error: clientsReview2Error } = await supabase
			.from("Clients")
			.update({ reviews: [reviewID] })
			.match({ client_id: clientID });

		if (clientsReview2Error) throw clientsReview2Error;

		// Add the job to the clients
		const { data: clientsJob, error: clientsJobError } = await supabase
			.from("Clients")
			.update({ jobs_posted: [jobID] })
			.match({ client_id: clientID });

		if (clientsJobError) throw clientsJobError;

		console.log("Relational data added successfully");
	} catch (error) {
		console.error("Error adding relational data:", error);
	}
})();

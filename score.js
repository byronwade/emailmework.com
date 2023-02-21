const companyScore = {
	reviews: {
		weight: 100,
		data: 5,
		range: [0, 5],
	},
	location: {
		weight: 100,
		data: 10,
		range: [0, 25],
	},
	qualityOfWriting: {
		weight: 50,
		data: 60,
		range: [0, 100],
	},
	keywords: {
		weight: 40,
		data: 10,
		range: [0, 30],
	},
	amountOfAccepted: {
		weight: 5,
		data: 5,
		range: [0, 50], //range end will be the most jobs they have accepted
	},
};

const clientScore = {
	reviews: {
		weight: 100,
		data: 5,
		range: [0, 5],
	},
	activity: {
		weight: 10,
		data: 10,
		range: [0, 30],
	},
	amountOfJobsPostedandAccepted: {
		weight: 80,
		data: 5,
		range: [0, 50], //range end will be the most jobs they have accepted
	},
};

const jobScore = {
	qualityOfWriting: {
		weight: 90,
		data: 60,
		range: [0, 100],
	},
	keywords: {
		weight: 40,
		data: 10,
		range: [0, 30],
	},
};

function calculateScore(inputData) {
	let totalWeight = 0;
	let weightedSum = 0;

	for (const influencer in inputData) {
		const weight = inputData[influencer].weight;
		const data = inputData[influencer].data;
		const range = inputData[influencer].range;

		const normalizedData = ((data - range[0]) / (range[1] - range[0])) * 100;

		weightedSum += weight * normalizedData;
		totalWeight += weight;
	}

	const score = (weightedSum / totalWeight).toFixed(2);
	return Math.min(Math.max(score, 1), 100);
}

console.log("Company Score: ", calculateScore(companyScore));
console.log("Client Score: ", calculateScore(clientScore));
console.log("Job Score: ", calculateScore(jobScore));

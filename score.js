const companyData = {
	influencers: {
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
		dataPosted: {
			weight: 90,
			data: 5,
			range: [0, 365], //range end will be the most jobs they have accepted
		},
	},
};

const clientData = {
	influencers: {
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
		dataPosted: {
			weight: 90,
			data: 5,
			range: [0, 365], //range end will be the most jobs they have accepted
		},
	},
};

const jobData = {
	influencers: {
		qualityOfWriting: {
			weight: 90,
			data: 1,
			range: [0, 100],
		},
		keywords: {
			weight: 40,
			data: 10,
			range: [0, 30], // change the range to [0, 30]
		},
		dataPosted: {
			weight: 90,
			data: 1,
			range: [0, 365], //range end will be the most jobs they have accepted
		},
	},
};

function calculateScore(inputData) {
	let totalWeight = 0;
	let weightedSum = 0;

	for (const influencer in inputData.influencers) {
		const weight = inputData.influencers[influencer].weight;
		const data = inputData.influencers[influencer].data;
		const range = inputData.influencers[influencer].range;

		const rangeSize = range[1] - range[0];
		const normalizedData = rangeSize !== 0 ? ((data - range[0]) / rangeSize) * 100 : 0;

		weightedSum += weight * normalizedData;
		totalWeight += weight;
	}

	const score = totalWeight > 0 ? (weightedSum / totalWeight).toFixed(2) : 0;
	return isNaN(score) ? 0 : Math.min(Math.max(score, 1), 100);
}

console.log("Company Score: ", calculateScore(companyData));
console.log("Client Score: ", calculateScore(clientData));
console.log("Job Score: ", calculateScore(jobData));

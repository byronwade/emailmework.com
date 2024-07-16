// context/JobContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fakeJobs } from "@/lib/fakeData";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchJobs = async () => {
			setLoading(true);
			if (process.env.NEXT_PUBLIC_USE_FAKE_DATA === "true") {
				setJobs(fakeJobs);
				setLoading(false);
				return;
			}
			// Fetch data from Supabase or any other API
			setLoading(false);
		};
		fetchJobs();
	}, []);

	return <JobContext.Provider value={{ jobs, loading, error }}>{children}</JobContext.Provider>;
};

export const useJobs = () => {
	return useContext(JobContext);
};

// context/ProContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fakeProData } from "@/lib/fakeData";

const ProContext = createContext();

export const ProProvider = ({ children }) => {
	const [proData, setProData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProData = async () => {
			setLoading(true);
			if (process.env.NEXT_PUBLIC_USE_FAKE_DATA === "true") {
				setProData(fakeProData);
				setLoading(false);
				return;
			}
			// Fetch data from Supabase or any other API
			setLoading(false);
		};
		fetchProData();
	}, []);

	return <ProContext.Provider value={{ proData, loading, error }}>{children}</ProContext.Provider>;
};

export const usePro = () => {
	return useContext(ProContext);
};

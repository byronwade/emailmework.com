// context/SettingsContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fakeSettings } from "@/lib/fakeData";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchSettings = async () => {
			setLoading(true);
			if (process.env.NEXT_PUBLIC_USE_FAKE_DATA === "true") {
				setSettings(fakeSettings);
				setLoading(false);
				return;
			}
			// Fetch data from Supabase or any other API
			setLoading(false);
		};
		fetchSettings();
	}, []);

	return <SettingsContext.Provider value={{ settings, loading, error }}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
	return useContext(SettingsContext);
};

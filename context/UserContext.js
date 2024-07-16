// context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "@/lib/supabaseClient";
import { fakeUser } from "@/lib/fakeData";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getSession = async () => {
			setLoading(true);
			if (process.env.NEXT_PUBLIC_USE_FAKE_DATA === "true") {
				setUser(fakeUser);
				setLoading(false);
				return;
			}
			const { data: session, error } = await supabase.auth.getSession();
			setUser(session?.user ?? null);
			setError(error);
			setLoading(false);
		};
		getSession();
	}, []);

	const signOut = async () => {
		setLoading(true);
		const { error } = await supabase.auth.signOut();
		if (error) {
			setError(error);
		} else {
			setUser(null);
		}
		setLoading(false);
	};

	return <UserContext.Provider value={{ user, loading, error, signOut, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	return useContext(UserContext);
};

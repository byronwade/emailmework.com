import { createClient } from "@supabase/supabase-js";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_SUPABASE_URL,
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
		apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	},
});

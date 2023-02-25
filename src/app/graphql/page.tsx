// @ts-nocheck
"use client";
import { useExplorerPlugin } from "@graphiql/plugin-explorer";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import { useState } from "react";

import "graphiql/graphiql.css";
import "@graphiql/plugin-explorer/dist/style.css";

const fetcher = createGraphiQLFetcher({
	url: process.env.NEXT_PUBLIC_SUPABASE_URL,
	fetch: (url, init) => {
		return fetch(url, {
			...init,
			headers: {
				...init.headers,
				apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
			},
		});
	},
});

export default function GraphiQLWithExplorer() {
	const [query, setQuery] = useState();
	const explorerPlugin = useExplorerPlugin({
		query,
		onEdit: setQuery,
	});
	return <GraphiQL fetcher={fetcher} query={query} onEditQuery={setQuery} plugins={[explorerPlugin]} />;
}

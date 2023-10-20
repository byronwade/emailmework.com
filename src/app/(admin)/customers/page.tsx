import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Index() {
	return (
		<div className="w-full flex flex-col items-center">
			<>test</>
		</div>
	);
}

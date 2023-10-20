import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Index() {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { user },
	} = await supabase.auth.getUser();
	console.log(user);
	return (
		<div className="w-full flex flex-col items-center">
			<>emilmework.com</>
		</div>
	);
}

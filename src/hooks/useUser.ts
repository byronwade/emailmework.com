import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { userState } from "../recoil/state/userState";

export function useUser() {
	const { data: session, status } = useSession();
	const [user, setUser] = useRecoilState(userState);
	useEffect(() => {
		return setUser(session);
	}, [session, user, status, setUser]);

	return { ...user?.user };
}

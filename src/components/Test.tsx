"use client";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function Test() {
	const { data: session } = useSession();

	/* const [users, loading, error] = useCollection(session && collection(db));  */

	const createNewChat = async () => {
		const doc = await addDoc(
			collection(db, "users", session?.user?.email!, "chats"),
			{
				messages: [],
				userId: session?.user?.email!,
				createdAt: serverTimestamp(),
			}
		);
	};
	return (
		<div onClick={createNewChat}>
			<div>{session?.user?.name}</div>
			<Image
				src={session?.user?.image || "https://via.placeholder.com/80"}
				width={80}
				height={80}
				alt=""
			/>
			<div>{session?.user?.email}</div>
		</div>
	);
}

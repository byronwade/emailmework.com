"use client";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import type { DocumentData } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useState, useEffect } from "react";

export default function Home() {
	const [adminUsers, setAdminUsers] = useState<DocumentData[]>([]);

	useEffect(() => {
		const unsub = onSnapshot(collection(db, "Admin Users"), (snapshot) => {
			const adminUsersData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setAdminUsers(adminUsersData);
		});

		return unsub;
	}, []);

	return (
		<div>
			{adminUsers.map((user) => (
				<div key={user.admin_id}>
					<h2 className="h2">{user.name}</h2>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
}

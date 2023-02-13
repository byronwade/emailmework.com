'use client'

import { signOut } from "next-auth/react"

export default function Login() {
	return (
    <div>
        <button onClick={() => signOut()}>Sign out</button>
    </div>
    );
}

import SessionProvider from "../componenets/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Login from "../componenets/Login/Login";
import Logout from "../componenets/Logout/Logout";
import Test from "../componenets/Test";
import Header from "../componenets/Header/Header";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<Header />
			<SessionProvider session={session}>
				{!session ? (
					<Login />
				) : (
					<div>
						<Logout />
						<hr />
						<Test />
					</div>
				)}
			</SessionProvider>
		</div>
	);
}

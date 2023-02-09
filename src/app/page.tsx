import SessionProvider from './componenets/SessionProvider'
import {getServerSession} from "next-auth"
import { authOptions } from '../pages/api/auth/[...nextauth]';
import Login from './componenets/Login/Login';
import Logout from './componenets/Logout/Logout';
import Test from './componenets/Test';

export default async function Home() {
	const session = await getServerSession(authOptions)
	return (
	<div>
		<h1 className='text-3xl font-bold underline'>Hello world!</h1>
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
	</div>);
}
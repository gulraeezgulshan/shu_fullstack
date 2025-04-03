import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	return (
		<div>
			Hi, {user?.firstName}, {user?.emailAddresses[0].emailAddress},{" "}
			{user?.id}
		</div>
	);
}

import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { cn } from "@/lib/utils";

const Navbar = async () => {
	const user = await currentUser();
	return (
		<nav className="bg-gray-800 text-white flex justify-between items-center p-5 shadow-sm">
			<Image src={Logo} height={44} alt="Logo" />
			<ul className="flex gap-3">
				<li className={cn("", { hidden: user ? true : false })}>
					<Link
						className="bg-gray-950 flex items-center justify-center px-3 py-2 rounded-sm shadow-sm"
						href={"/sign-in"}
					>
						Login
					</Link>
				</li>
				<li className={cn("", { hidden: !!user })}>
					<Link
						className="bg-gray-950 flex items-center justify-center px-3 py-2 rounded-sm shadow-sm"
						href={"/sign-up"}
					>
						Register
					</Link>
				</li>
				{user && (
					<li className="flex items-center gap-3">
						Hi, {user?.emailAddresses[0].emailAddress}
						<UserButton />
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;

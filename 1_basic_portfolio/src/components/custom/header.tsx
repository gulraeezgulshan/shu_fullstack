import React from "react";
import Link from "next/link";

const navLinks = [
	{ title: "Home", href: "#home" },
	{ title: "About", href: "#about" },
	{ title: "Projects", href: "/home" },
	{ title: "Skills", href: "/home" },
	{ title: "Experience", href: "/home" },
	{ title: "Contact", href: "/contact" },
];

const Header = () => {
	return (
		<header className="fixed">
			<nav className="bg-white w-[650px] px-6 py-3 rounded-full border shadow-sm">
				<ul className="flex flex-row gap-4 items-center justify-center text-lg">
					{navLinks.map((item, index) => (
						<li
							key={index}
							className="p-[10px] rounded-full hover:bg-red-200 transition"
						>
							<Link href={item.href}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;

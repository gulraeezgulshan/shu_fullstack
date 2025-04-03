"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Counter from "./counter";
import { useState } from "react";

//Properties
//Due to typescript handling

type BoxProps = {
	title: string;
	className: string;
};

const Box = ({ title, className }: BoxProps) => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		// <div
		// 	className={`w-64 h-64 rounded-lg shadow-sm flex items-center justify-center text-lg font-bold ${className}`}
		// >
		// 	{title}
		// </div>
		<div
			className={cn(
				"w-64 p-4 rounded-lg shadow-sm flex items-center justify-center text-lg font-bold flex-col gap-4",
				className
			)}
		>
			{title}

			<Button className={cn({ hidden: title === "I am red box" })}>
				Click Me!
			</Button>

			<Button onClick={handleToggle} variant={"outline"}>
				{toggle ? "Hide" : "Show"}
			</Button>
			{toggle && <Counter />}
		</div>
	);
};

export default Box;

"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleIncrement = () => {
		//setCounter(counter+1);

		setCounter((prev) => prev + 1);
	};

	const handleDecrement = () => {
		//setCounter(counter-1);

		if (counter <= 0) {
			return; //It break the code
		}

		setCounter((prev) => prev - 1);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-4 border rounded-md p-4">
			<p className="text-5xl font-bold">{counter}</p>

			<div className="flex gap-2">
				<Button onClick={handleIncrement} className="text-lg">
					+
				</Button>
				<Button
					onClick={handleDecrement}
					className="bg-red-600 text-lg"
				>
					-
				</Button>
			</div>
		</div>
	);
};

export default Counter;

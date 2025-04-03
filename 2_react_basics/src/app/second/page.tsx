"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type Chapter = {
	id: number;
	revelation_place: string;
	revelation_order: number;
	name_simple: string;
	name_arabic: string;
	verses_count: number;
	translated_name: {
		language_name: string;
		name: string;
	};
};

const SecondPage = () => {
	const [data, setData] = useState<Chapter[]>([]);

	const fetchData = async () => {
		const response = await axios.get(
			"https://api.quran.com/api/v4/chapters"
		);

		setData(response.data.chapters);

		// console.log(response.data.chapters);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="flex flex-col gap-4 m-8 w-[650px]">
			{data &&
				data.map((chapter) => (
					<div
						key={chapter.id}
						className="bg-gray-100 border rounded-lg shadow-md p-6 flex justify-between"
					>
						<p className="">{chapter.name_simple}</p>
						<div className="bg-black rounded-full w-10 h-10 flex items-center justify-center text-white shadow-sm">
							<h1>{chapter.verses_count}</h1>
						</div>
					</div>
				))}
		</div>
	);
};

export default SecondPage;

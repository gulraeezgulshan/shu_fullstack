"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
	//React way of storing data
	const [data, setData] = useState([]);

	//React way of fetching data
	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(
				"https://api.quran.com/api/v4/chapters?language=ur"
			);

			console.log(response.data.chapters);
			setData(response.data.chapters);
		}

		fetchData();
	}, []);

	return (
		<div>
			{data.map((chapter) => (
				<div key={chapter.id}>{chapter.name_complex}</div>
			))}
		</div>
	);
}

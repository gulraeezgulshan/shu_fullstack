import { prisma } from "@/lib/prisma";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const StudentList = async () => {
	const data = await prisma.student.findMany();

	return (
		<div className="flex flex-col gap-4 m-5">
			{data.map((item) => (
				<div
					key={item.id}
					className="bg-gray-100 rounded-md p-5 text-xl flex items-center justify-between"
				>
					<p className="">{item.firstName}</p>
					<Link href={`/student/${item.id}`}>
						<Eye />
					</Link>
				</div>
			))}
		</div>
	);
};

export default StudentList;

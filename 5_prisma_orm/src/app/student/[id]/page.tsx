import { prisma } from "@/lib/prisma";
import React from "react";

const StudentDetailPage = async ({
	params,
}: {
	params: Promise<{ id: string }>;
}) => {
	const { id } = await params;

	const data = await prisma.student.findUnique({
		where: {
			id: Number(id),
		},
	});
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<ul className="text-2xl flex flex-col gap-5">
				<li>
					First Name:{" "}
					<span className="rounded-full  bg-gray-100 font-bold px-3">
						{data?.firstName}
					</span>{" "}
				</li>
				<li>
					Last Name:{" "}
					<span className="rounded-full  bg-gray-100 font-bold px-3">
						{data?.lastName}
					</span>{" "}
				</li>
				<li>
					Student ID:{" "}
					<span className="rounded-full  bg-gray-100 font-bold px-3">
						{data?.studentId}
					</span>{" "}
				</li>
				<li>
					GPA:{" "}
					<span className="rounded-full  bg-gray-100 font-bold px-3">
						{data?.gpa}
					</span>{" "}
				</li>
			</ul>
		</div>
	);
};

export default StudentDetailPage;

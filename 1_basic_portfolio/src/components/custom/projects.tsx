import Image from "next/image";
import React from "react";
import ProjectImage1 from "../../../public/project_1.jpg";
import ProjectImage2 from "../../../public/project_2.jpg";

const Projects = () => {
	return (
		<section className="flex flex-col mb-28">
			<h1 className="flex text-3xl font-bold mb-10 items-center justify-center">
				My Projects
			</h1>
			<div className="group flex">
				<div className="flex border w-[960px] gap-4 overflow-hidden">
					<div className="flex-1">
						<Image
							src={ProjectImage1}
							width={450}
							height={450}
							alt="project_1"
							className="group-hover:translate-x-5 group-hover:translate-y-5 transition rounded-4xl"
						/>
					</div>
					<div className="flex-1 flex-col">
						<h1 className="text-2xl font-bold mb-5">
							An AI application
						</h1>
						<p className="font-semibold mb-5">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type ....
						</p>
						<p className="flex gap-3">
							<span className="bg-black rounded-full px-3 py-1 text-white">
								#AI
							</span>
							<span>#LLM</span>
							<span>#fullstack</span>
							<span>#shu</span>
							<span>#sample</span>
						</p>
					</div>
				</div>
			</div>
			<div className="group">
				<div className="flex border w-[960px] gap-4 overflow-hidden flex-row-reverse">
					<div className="flex-1">
						<Image
							src={ProjectImage1}
							width={450}
							height={450}
							alt="project_1"
							className="group-hover:translate-x-5 group-hover:translate-y-5 transition rounded-4xl"
						/>
					</div>
					<div className="flex-1 flex-col">
						<h1 className="text-2xl font-bold mb-5">
							An AI application
						</h1>
						<p className="font-semibold mb-5">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type ....
						</p>
						<p className="flex gap-3">
							<span className="bg-black rounded-full px-3 py-1 text-white">
								#AI
							</span>
							<span>#LLM</span>
							<span>#fullstack</span>
							<span>#shu</span>
							<span>#sample</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;

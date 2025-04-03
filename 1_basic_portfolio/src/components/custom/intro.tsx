//

import Link from "next/link";
import { Button } from "../ui/button";
import { Contact, Download, Facebook } from "lucide-react";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import ProfilePhoto from "../../../public/profile_photo.jpg";

const Intro = () => {
	return (
		<section className="mt-28 mb-28">
			<div className="flex items-center justify-center flex-col">
				<div className="relative group">
					<Image
						className="w-[154px] h-[154px] rounded-full border-8 border-white shadow-sm"
						src={ProfilePhoto}
						alt="ProfilePhoto"
					/>
					<p className="text-5xl absolute bottom-6 right-2 group-hover:-rotate-25 transition">
						👋
					</p>
				</div>

				<p className="mb-10 w-[600px] text-2xl leading-[1.5]">
					Hello, I am{" "}
					<span className="font-bold">Gulraeez Gulshan</span>. I am
					teaching a full stack application at Salim Habib University.
					We will include different tech stack in the course i.e{" "}
					<span className="font-medium italic">
						NextJS, Supabase, AI/LLM, Api Integration etc.
					</span>
				</p>

				<div className="flex gap-4">
					<Link
						className="bg-black text-white px-6 py-2 rounded-md text-lg items-center justify-center flex gap-2 group"
						href={"/"}
					>
						Contact{" "}
						<Contact className="group-hover:-translate-y-1 transition" />
					</Link>
					<Link
						className="bg-white border-2 px-6 py-2 rounded-md text-lg items-center justify-center flex gap-2 group"
						href={"/"}
					>
						Download CV{" "}
						<Download className="group-hover:-translate-y-1 transition" />
					</Link>
					<Link
						href={"/"}
						className="bg-white items-center justify-center flex border-2 w-[44px] h-[44px] rounded-full"
					>
						<FaSquareFacebook
							size={18}
							className="text-[#4867AA]"
						/>
					</Link>
					<Link
						href={"/"}
						className="bg-white items-center justify-center flex border-2 w-[44px] h-[44px] rounded-full"
					>
						<FaLinkedin className="text-[#0077B5]" size={18} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Intro;

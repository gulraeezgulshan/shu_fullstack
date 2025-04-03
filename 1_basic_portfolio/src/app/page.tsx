// import Header from "@/components/custom/header";
import Intro from "@/components/custom/intro";
import Projects from "@/components/custom/projects";

export default function Home() {
	return (
		<div className="relative flex items-center justify-center flex-col">
			{/* <Header /> */}
			<Intro />
			<Projects />
		</div>
	);
}

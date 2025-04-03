import Box from "@/components/custom/box";

export default function Home() {
	return (
		<div className="m-5 flex gap-4">
			<Box title="I am yellow box" className="bg-yellow-500" />
			<Box title="I am green box" className="bg-green-500" />
			<Box title="I am red box" className="bg-red-500" />
			<Box title="I am blue box" className="bg-blue-500" />
		</div>
	);
}

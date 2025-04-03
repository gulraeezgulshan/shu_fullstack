export default async function WorkspaceDetailsPage({
	params,
}: {
	params: { workspaceId: string };
}) {
	const id = (await params).workspaceId;
	return <div>This is Workpace Page for ID: {id} </div>;
}

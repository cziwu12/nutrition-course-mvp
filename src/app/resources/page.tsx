import { ResourceLibrary } from "@/components/resource-library";
export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const params = await searchParams;
  const query = typeof params.topic === "string" ? params.topic : "";
  return <ResourceLibrary key={query} initialQuery={query} />;
}

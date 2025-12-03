import type { BikeCase } from "../../types/bike";
import TheftCard from "./bike-card";
import Space from "../ui/space";
import TheftSkeletonList from "./skeleton/bike-list-skeleton";

export default function BikeList({
  bikes,
  loading,
  error,
  emptyMessage,
}: {
  bikes: BikeCase[] | undefined;
  loading: boolean;
  error: string | undefined;
  emptyMessage?: string;
}) {
  if (loading) return <TheftSkeletonList />;

  if (error)
    return <div style={{ color: "red" }}>Error loading thefts: {error}</div>;

  if (!bikes || bikes.length === 0)
    return <div>{emptyMessage ?? "No results"}</div>;

  return (
    <Space size={16}>
      {bikes.map((b) => (
        <TheftCard key={b.id} bike={b} />
      ))}
    </Space>
  );
}

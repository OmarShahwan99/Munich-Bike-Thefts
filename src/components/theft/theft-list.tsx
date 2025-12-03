import type { BikeCase } from "../../types/bike";
import TheftCard from "./theft-card";
import Space from "../ui/space";
import TheftSkeletonList from "./skeleton/theft-skeleton-list";

export default function TheftList({
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

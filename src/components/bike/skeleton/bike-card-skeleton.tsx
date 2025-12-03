import { SkeletonBlock, SkeletonWrapper } from "../../ui/skeleton";

export default function BikeCardSkeleton() {
  return (
    <SkeletonWrapper>
      <SkeletonBlock width="240px" height="220px" radius="10px" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "8px 4px",
        }}
      >
        <SkeletonBlock width="60%" height="20px" />
        <SkeletonBlock width="90%" height="14px" />
        <SkeletonBlock width="80%" height="14px" />
        <SkeletonBlock width="70%" height="14px" />
        <SkeletonBlock width="50%" height="14px" />
      </div>
    </SkeletonWrapper>
  );
}

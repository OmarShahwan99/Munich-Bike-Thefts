import Space from "../../ui/space";
import TheftCardSkeleton from "./theft-skeleton-card";

const TheftSkeletonList = () => {
  return (
    <Space size={16}>
      <TheftCardSkeleton />
      <TheftCardSkeleton />
      <TheftCardSkeleton />
    </Space>
  );
};

export default TheftSkeletonList;

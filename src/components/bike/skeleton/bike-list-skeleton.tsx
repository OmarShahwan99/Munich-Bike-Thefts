import Space from "../../ui/space";
import BikeCardSkeleton from "./bike-card-skeleton";

const TheftSkeletonList = () => {
  return (
    <Space size={16}>
      <BikeCardSkeleton />
      <BikeCardSkeleton />
      <BikeCardSkeleton />
    </Space>
  );
};

export default TheftSkeletonList;

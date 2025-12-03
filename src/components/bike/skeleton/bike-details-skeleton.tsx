import { Container } from "../../ui/container";
import { Grid } from "../../ui/grid";
import { SkeletonBlock } from "../../ui/skeleton";
import Space from "../../ui/space";

export const BikeDetailsSkeleton = () => {
  return (
    <Container className="spacing">
      <Space size={16}>
        {/* Back button skeleton */}
        <SkeletonBlock width="80px" height="32px" radius="6px" />
        <Space>
          {/* Title */}
          <SkeletonBlock width="60%" height="32px" />

          {/* Stolen info */}
          <SkeletonBlock width="40%" height="18px" />

          {/* Image block */}
          <SkeletonBlock width="400px" height="250px" radius="8px" />

          {/* Description */}
          <SkeletonBlock width="100%" height="60px" radius="6px" />
        </Space>

        {/* Grid specs */}
        <Space>
          <Grid>
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonBlock key={i} height="40px" radius="8px" />
            ))}
          </Grid>
        </Space>

        {/* Map skeleton */}
        <SkeletonBlock width="100%" height="400px" radius="8px" />
      </Space>
    </Container>
  );
};

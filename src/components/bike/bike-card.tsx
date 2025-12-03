import styled, { keyframes } from "styled-components";
import type { BikeCase } from "../../types/bike";
import { Link } from "react-router-dom";
import { fmtDate } from "../../lib/helpers";

const slideUpFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  display: flex;
  gap: 16px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  padding: 12px;
  transition: all 0.2s ease;

  animation: ${slideUpFade} 0.8s ease forwards;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const ImgWrapper = styled.div`
  width: 240px;
  height: 220px;
  border-radius: 10px;
  background: #f4f4f4;
  overflow: hidden;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  padding: 8px 4px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  transition: all 0.2s ease;
  &:hover {
    color: #1e88e5;
  }
`;

const Text = styled.div<{ small?: boolean; weight?: number }>`
  display: inline;
  font-size: ${(p) => (p.small ? "13px" : "14px")};
  color: ${(p) => (p.small ? "#666" : "#444")};
  line-height: 1.8;
  font-weight: ${(p) => (p.weight ? p.weight : 400)};
`;

export default function BikeCard({ bike }: { bike: BikeCase }) {
  return (
    <Card>
      <ImgWrapper>
        <Link to={`/bikes/${bike.id}`}>
          <Img
            src={
              bike.large_img ||
              "https://via.placeholder.com/240x220?text=No+Image"
            }
            alt={bike.title}
          />
        </Link>
      </ImgWrapper>

      <Meta>
        <Title>
          <Link to={`/bikes/${bike.id}`}>{bike.title}</Link>
        </Title>

        {bike.description && <Text>{bike.description}</Text>}
        <div>
          <Text weight={600}>Date stolen: </Text>
          <Text small>{fmtDate(bike.date_stolen)}</Text>
        </div>
        <div>
          <Text weight={600}>Reported: </Text>
          <Text small>{bike.date_reported ?? "Unknown"}</Text>
        </div>
        <div>
          <Text weight={600}>Location: </Text>
          <Text small>{bike.stolen_location ?? "Unknown"}</Text>
        </div>
      </Meta>
    </Card>
  );
}

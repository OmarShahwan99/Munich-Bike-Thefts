import { useParams, useNavigate } from "react-router-dom";
import { Container } from "../components/ui/container";
import { useBike } from "../hooks/query/use-bikes";
import styled from "styled-components";
import { Badge } from "../components/ui/badge";
import Space from "../components/ui/space";
import { fmtDate } from "../lib/helpers";
import { Grid } from "../components/ui/grid";
import { Button } from "../components/ui/button";
import { BikeDetailsSkeleton } from "../components/bike/skeleton/bike-details-skeleton";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 16px;
  max-width: 400px;
  img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const SpecItem = styled.div`
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
`;

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const src = `https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "8px" }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Bike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useBike(id);

  if (isLoading) return <BikeDetailsSkeleton />;
  if (!data) return <Container>Bike not found.</Container>;

  const bike = data;

  const specs = [
    { label: "Manufacturer", value: bike.manufacturer_name },
    { label: "Model", value: bike.frame_model },
    bike.frame_colors && {
      label: "Color",
      value: bike.frame_colors.join(", "),
    },
    { label: "Year", value: bike.year },
    { label: "Serial", value: bike.serial || "N/A" },
    { label: "Type", value: bike.type_of_cycle },
    { label: "Propulsion", value: bike.propulsion_type_slug },
    { label: "Stolen Location", value: bike.stolen_location || "N/A" },
  ].filter(Boolean);

  return (
    <Container className="spacing">
      <Button size="sm" variant="ghost" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <Space size={16}>
        <Space>
          <Title>
            {bike.title} {bike.stolen && <Badge color="#ff4d4f">Stolen</Badge>}
          </Title>
          <p>
            <strong>Stolen </strong>
            {fmtDate(bike.date_stolen)} <strong>from </strong>
            {bike.stolen_location}
          </p>
          <ImageWrapper>
            {bike.public_images.map((img) => (
              <img key={img.id} src={img.large} alt={img.name} />
            ))}
          </ImageWrapper>
          {bike.description && <p>{bike.description}</p>}
        </Space>

        <Space>
          <Grid>
            {specs.map((item, idx) => (
              <SpecItem key={idx}>
                <strong>{item.label}:</strong> {item.value}
              </SpecItem>
            ))}
          </Grid>
        </Space>

        <Map
          lat={bike.stolen_coordinates[0]}
          lng={bike.stolen_coordinates[1]}
        />
      </Space>
    </Container>
  );
};

export default Bike;

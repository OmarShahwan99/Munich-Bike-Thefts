import styled from "styled-components";

type SpaceProps = {
  size?: number; // spacing in pixels, default 8
  direction?: "vertical" | "horizontal"; // spacing direction, default vertical
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const SpaceWrapper = styled.div<SpaceProps>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  gap: ${({ size = 8 }) => `${size}px`};
`;

const Space: React.FC<SpaceProps> = ({
  children,
  size = 8,
  direction = "vertical",
  style,
}) => {
  return (
    <SpaceWrapper size={size} direction={direction} style={style}>
      {children}
    </SpaceWrapper>
  );
};

export default Space;

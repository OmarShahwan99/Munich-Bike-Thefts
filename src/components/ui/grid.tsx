import styled from "styled-components";

export const Grid = styled.div<{ columns?: string }>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns || "repeat(auto-fit, minmax(180px, 1fr))"};
  gap: 12px;
`;

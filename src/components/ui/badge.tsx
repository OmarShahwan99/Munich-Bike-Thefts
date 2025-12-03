import styled from "styled-components";

interface BadgeProps {
  color?: string;
}

export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  background-color: ${({ color }) => color || "#007bff"};
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  padding: 4px 10px;
  border-radius: 12px;
  width: fit-content;
  text-align: center;
`;

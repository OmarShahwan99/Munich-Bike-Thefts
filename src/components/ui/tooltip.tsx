import styled from "styled-components";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

const TooltipText = styled.span`
  position: absolute;
  bottom: 125%; /* above the button */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* arrow below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

export const Tooltip = ({
  content,
  children,
}: {
  content: string;
  children: React.ReactNode;
}) => (
  <TooltipWrapper>
    {children}
    <TooltipText>{content}</TooltipText>
  </TooltipWrapper>
);

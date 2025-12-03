import styled, { keyframes } from "styled-components";

// Skeleton animation
const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }
  100% {
    background-position: 400px 0;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  gap: 16px;
  border: 1px solid #e3e3e3;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  padding: 12px;
  animation: ${shimmer} 1.5s linear infinite;
`;

export const SkeletonBlock = styled.div<{
  width?: string;
  height?: string;
  radius?: string;
}>`
  background: #eee;
  border-radius: ${(p) => p.radius || "4px"};
  width: ${(p) => p.width || "100%"};
  height: ${(p) => p.height || "16px"};
  flex-shrink: 0;
  background-image: linear-gradient(90deg, #eee 0px, #f5f5f5 40px, #eee 80px);
  background-size: 400px 100%;
`;

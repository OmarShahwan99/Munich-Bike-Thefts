import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const sizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: 12px;
  `,
  md: css`
    padding: 10px 18px;
    font-size: 14px;
  `,
  lg: css`
    padding: 14px 24px;
    font-size: 16px;
  `,
};

const variantStyles = {
  primary: css`
    background: #1e88e5;
    color: white;
    border: none;

    &:hover {
      background: #1565c0;
    }
  `,
  secondary: css`
    background: transparent;
    color: #111;
    border: 1px solid #444;

    &:hover {
      background: #222;
      color: #fff;
    }
  `,
  ghost: css`
    background: transparent;
    color: #1e88e5;
    border: none;

    &:hover {
      background: rgba(30, 136, 229, 0.1);
    }
  `,
  link: css`
    background: none;
    color: #1e88e5;
    border: none;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease all;
  ${(p) => sizeStyles[p.size || "md"]}
  ${(p) => variantStyles[p.variant || "primary"]}

  &:disabled {
    background: #555;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

Button.defaultProps = {
  variant: "primary",
  size: "md",
};

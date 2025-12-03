import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  background: #ffffff;
  color: #333;
  font-size: 14px;
  transition: all 0.25s ease;

  &:hover {
    border-color: #b5b5b5;
  }

  &:focus {
    outline: none;
    border-color: #1e88e5;
    box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.25);
  }

  &::placeholder {
    color: #777;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

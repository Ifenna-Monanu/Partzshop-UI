import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

type IVaariant = "full" | "small" | "medium";
type IBtnType = "primary" | "secondary" | "link" | "neutral";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVaariant | undefined;
  btnType?: IBtnType | "primary";
}

const Button: FC<ButtonProps> = ({ children, variant, btnType, ...props }) => {
  return (
    <ButtonUI className={btnType} $varaint={variant} {...props}>
      {children}
    </ButtonUI>
  );
};

export default Button;

const ButtonUI = styled.button<{
  $varaint: IVaariant | undefined;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  width: ${({ $varaint }) => ($varaint === "full" ? "100%" : "auto")};
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #0043e6;
  border: 1px solid #0043e6;
  border-radius: 50rem;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:disabled {
    opacity: 0.5;
  }
  &.primary {
    color: #ffffff;
    background: #0043e6;
    border: 1px solid #0043e6;
  }
  &.secondary {
    color: #0043e6;
    background: #ffffff;
    border: 1px solid #0043e6;
    &:hover {
      color: #ffffff;
      background: #0043e6;
      border: 1px solid #0043e6;
    }
  }
  &.link {
  }
`;

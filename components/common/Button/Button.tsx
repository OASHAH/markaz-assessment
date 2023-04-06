import React from "react";
import { Button as FlowBiteButton } from "flowbite-react";

type Type = "submit" | "reset" | "button" | undefined;
interface ParentCompProps {
  children?: React.ReactNode;
  color: string;
  type?: string;
  buttonType: Type;
  size: string;
  className?: string;
  handleButtonClick?: any;
}

const Button: React.FC<ParentCompProps> = props => {
  const {
    children,
    color,
    type,
    size = "lg",
    className,
    handleButtonClick = () => {},
    buttonType
  } = props;
  return (
    <FlowBiteButton
      onClick={handleButtonClick}
      className={className}
      color={color}
      pill={type === "pill" ? true : false}
      type={buttonType}
      size={size}
    >
      {children}
    </FlowBiteButton>
  );
};

export default Button;

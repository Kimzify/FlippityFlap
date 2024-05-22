import { StyledButton } from "./Button.styled";
import type { ButtonProps } from "./Button.types";

const Button = ({ title }: ButtonProps) => {
  return (
    <StyledButton bcolor="red" dir="top">
      {title}
    </StyledButton>
  );
};

export default Button;

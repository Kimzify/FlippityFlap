import styled from "@emotion/styled";
import { ButtonStyleProps } from "./Button.types";

function generateWidth({ bcolor }: any) {
  if (bcolor === "top") {
    return "10px";
  }
  return "20px";
}

export const StyledButton = styled.button<ButtonStyleProps>`
  color: turquoise;
  &:hover {
    color: red;
  }
  background-color: ${({ bcolor }) => bcolor};
  width: ${generateWidth};
`;

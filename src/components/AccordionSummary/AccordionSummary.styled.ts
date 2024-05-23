import styled from "@emotion/styled";
import { IconStyledProps } from "./AccordionSummary.types";

export const StyledAccordionSummary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const StyledSummary = styled.div`
  font-size: 1rem;
`;

export const StyledIcon = styled.div<IconStyledProps>`
  width: 24px;
  height: 24px;
  transition: transform 200ms;
  transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "rotate(0)")};
`;

import styled from "@emotion/styled";
import { DetailWrapperStyledProps } from "./AccordoinItem.types";

export const StyledAccordionItem = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const StyledDetailWrapper = styled.div<DetailWrapperStyledProps>`
  display: grid;
  grid-template-rows: ${({ expanded }) => (expanded ? "1fr" : "0fr")};
  transition: grid-template-rows 200ms;
`;

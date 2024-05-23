import { StyledAccordionDetails } from "./AccordionDetails.styled";
import type { AccordionDetailsBaseProps } from "./AccordionDetails.types";

const AccordionDetails = ({ children }: AccordionDetailsBaseProps) => {
  return <StyledAccordionDetails>{children}</StyledAccordionDetails>;
};

export default AccordionDetails;

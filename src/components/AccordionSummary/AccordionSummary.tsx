import { useContext } from "react";
import {
  StyledAccordionSummary,
  StyledSummary,
  StyledIcon,
} from "./AccordionSummary.styled";
import type { AccordionSummaryBaseProps } from "./AccordionSummary.types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AccordionContext } from "../Accordoin/Accordion.context";

const AccordionSummary = ({
  children,
  expandIcon,
}: AccordionSummaryBaseProps) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <StyledAccordionSummary>
      <StyledSummary>{children}</StyledSummary>
      <StyledIcon expanded={expanded}>
        {expandIcon || <KeyboardArrowDownIcon />}
      </StyledIcon>
    </StyledAccordionSummary>
  );
};

export default AccordionSummary;

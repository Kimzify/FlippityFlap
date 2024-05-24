import {
  StyledAccordionSummary,
  StyledSummary,
  StyledIcon,
} from "./AccordionSummary.styled";
import type { AccordionSummaryBaseProps } from "./AccordionSummary.types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { memo } from "react";

const AccordionSummary = ({
  children,
  expanded,
}: AccordionSummaryBaseProps) => {
  return (
    <StyledAccordionSummary>
      <StyledSummary>{children}</StyledSummary>
      <StyledIcon expanded={expanded}>{<KeyboardArrowDownIcon />}</StyledIcon>
    </StyledAccordionSummary>
  );
};

export default memo(AccordionSummary);

import { AccordionContext } from "./Accordion.context";
import {
  StyledAccordion,
  StyledDetailWrapper,
  StyledSummaryWrapper,
} from "./Accordion.styled";
import type { AccordionBaseProps } from "./Accordion.types";
import { Children, useState } from "react";

const Accordion = ({ children: childrenProp }: AccordionBaseProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [summary, ...children] = Children.toArray(childrenProp);

  const onExpandAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <StyledAccordion>
      <StyledSummaryWrapper onClick={onExpandAccordion}>
        <AccordionContext.Provider value={{ expanded: isExpanded }}>
          {summary}
        </AccordionContext.Provider>
        <StyledDetailWrapper expanded={isExpanded}>
          <div style={{ overflow: "hidden" }}>{children}</div>
        </StyledDetailWrapper>
      </StyledSummaryWrapper>
    </StyledAccordion>
  );
};

export default Accordion;

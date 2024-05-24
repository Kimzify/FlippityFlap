import { AccordionContext } from "./Accordion.context";
import { StyledAccordion } from "./Accordion.styled";
import type { AccordionBaseProps } from "./Accordion.types";
import { useMemo, useState } from "react";

const Accordion = ({ children }: AccordionBaseProps) => {
  const [expandKeys, setExpandKeys] = useState<string[]>([]);

  const onExpandAccordion = (key: string) => {
    if (expandKeys.indexOf(key) !== -1) {
      setExpandKeys((prev) => {
        const next = [...prev];
        next.splice(next.indexOf(key), 1);
        return next;
      });
    } else {
      setExpandKeys((prev) => [...prev, key]);
    }
  };

  const value = useMemo(
    () => ({ expandKeys: expandKeys, onExpand: onExpandAccordion }),
    [expandKeys]
  );
  
  return (
    <AccordionContext.Provider value={value}>
      <StyledAccordion>{children}</StyledAccordion>
    </AccordionContext.Provider>
  );
};

export default Accordion;
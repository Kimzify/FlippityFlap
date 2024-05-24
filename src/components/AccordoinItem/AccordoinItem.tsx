import AccordionSummary from "../AccordionSummary";
import { AccordionContext } from "../Accordoin/Accordion.context";
import {
  StyledAccordionItem,
  StyledDetailWrapper,
} from "./AccordoinItem.styled";
import type { AccordionItemBaseProps } from "./AccordoinItem.types";
import { ComponentProps, useContext } from "react";

const AccordoinItem = ({
  children,
  summary,
  itemKey,
}: AccordionItemBaseProps) => {
  const { expandKeys, onExpand } = useContext(AccordionContext);

  const onExpandAccordion: ComponentProps<"div">["onClick"] = (e) => {
    const currentKey = e.currentTarget.getAttribute("data-itemkey");
    if (currentKey) onExpand(currentKey);
  };

  return (
    <StyledAccordionItem>
      <div
        onClick={onExpandAccordion}
        data-itemkey={itemKey}
        aria-hidden="true"
      >
        <AccordionSummary expanded={expandKeys.indexOf(itemKey) !== -1}>
          {summary}
        </AccordionSummary>
      </div>
      <StyledDetailWrapper expanded={expandKeys.indexOf(itemKey) !== -1}>
        <div style={{ overflow: "hidden" }}>{children}</div>
      </StyledDetailWrapper>
    </StyledAccordionItem>
  );
};

export default AccordoinItem;

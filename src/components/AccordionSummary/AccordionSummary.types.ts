import type { ReactNode } from "react";

export type AccordionSummaryBaseProps = {
  expandIcon?: ReactNode;
  children: ReactNode;
};

export type IconStyledProps = {
  expanded: boolean;
};

import type { ComponentProps, ReactNode } from "react";

export type AccordionSummaryBaseProps = ComponentProps<"div"> & {
  children: ReactNode;
  expanded: boolean;
};

export type IconStyledProps = {
  expanded: boolean;
};

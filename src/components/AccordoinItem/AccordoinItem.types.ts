import { ReactNode } from "react";

export type AccordionItemBaseProps = {
  children: ReactNode;
  summary: ReactNode;
  itemKey: string;
};

export type DetailWrapperStyledProps = {
  expanded: boolean;
};

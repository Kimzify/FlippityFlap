import { ReactNode } from "react";

export type AccordionBaseProps = {
  children: ReactNode;
};

export type DetailWrapperStyledProps = {
  expanded: boolean;
};

type OnExpandHandler = (key: string) => void;

export type AccordionContextProps = {
  onExpand: OnExpandHandler;
  expandKeys: string[];
};
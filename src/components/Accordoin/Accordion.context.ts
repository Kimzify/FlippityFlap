import { createContext } from "react";
import type { AccordionContextProps } from "./Accordion.types";

export const AccordionContext = createContext<AccordionContextProps>({
  expandKeys: [],
  onExpand: () => {},
});

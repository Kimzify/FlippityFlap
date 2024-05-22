import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  title: string;
};

export type ButtonStyleProps = {
  bcolor?: string;
};

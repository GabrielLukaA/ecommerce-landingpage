import { ComponentProps, ReactNode } from "react";

interface IconProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export const IconHeader = ({ children, ...props }: IconProps) => {
  return <button {...props}>{children}</button>;
};

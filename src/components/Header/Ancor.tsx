import { ComponentProps } from "react";

interface AncorProps extends ComponentProps<"a"> {
  name: string;
}

export const Ancor = ({ name, ...props }: AncorProps) => {
  return <a className="font-medium" {...props}>{name}</a>;
};

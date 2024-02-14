import { HeaderAncors } from "./HeaderAncors";
import { IconsHeader } from "./IconsHeader";

export const Header = () => {
  return (
    <div className="py-[38px] justify-end gap-[158px] flex w-full px-[100px]">
      <HeaderAncors />
      <IconsHeader />
    </div>
  );
};

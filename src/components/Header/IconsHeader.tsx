import { Cart } from "../Icons/Header/Cart";
import { Favorites } from "../Icons/Header/Favorites";
import { Profile } from "../Icons/Header/Profile";
import { Search } from "../Icons/Header/Search";
import { IconHeader } from "./IconHeader";

export const IconsHeader = () => {
  return (
    <div className="flex gap-[45px]">
      <IconHeader>
        <Profile />
      </IconHeader>
      <IconHeader>
        <Search />
      </IconHeader>
      <IconHeader>
        <Favorites />
      </IconHeader>
      <IconHeader>
        <Cart />
      </IconHeader>
    </div>
  );
};

import { Filter } from "../Icons/Filter/Filter";
import { GridSize } from "../Icons/Filter/GridSize";
import { ViewList } from "../Icons/Filter/ViewList";

export const FilterBar = () => {
  return (
    <div className="flex items-center justify-center w-full py-[38px] bg-rose px-[100px]">
      <div className="flex gap-[348px]">
        <div className="flex gap-8 items-center">
          <div className="flex gap-6 items-center">
            <div className="gap-3 flex">
              <Filter />
              <p className="text-xl leading-normal">Filter</p>
            </div>
            <GridSize />
            <ViewList />
          </div>
          <div className="w-[2px] h-9 bg-[#9F9F9F]" />
          <p className="leading-normal">Showing 1-16 of 32 results</p>
        </div>
        <div className="gap-8 flex items-center">
          <div className="flex gap-4 items-center">
            <p>Show</p>
            <input
              type="text"
              placeholder="16"
              className="text-xl text-center leading-normal w-[55px] py-3 px-4"
            />
          </div>
          <div className="flex gap-4 items-center">
            <p>Short by</p>
            <input
              type="text"
              className="py-3 text-xl leading-normal px-[30px] w-[188px]"
              placeholder="Default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

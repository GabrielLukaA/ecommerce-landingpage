import { FilterBar } from "@/components/FilterBar";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
      <FilterBar />
      <div className="tha w-full justify-center max-w-[1280px] gap-y-4 py-4 gap-x-4 px-[100px]">
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col gap-3 border-black border-2 p-4">
          <div className="w-full  h-[280px] flex items-center justify-center">
            <Image
              src={"vercel.svg"}
              width={200}
              height={200}
              className="w-full"
              alt="2"
            />
          </div>
          <p className="leading-normal">Trenton modular sofa_3</p>
          <p className="font-medium text-2xl leading-normal">Rs. 25,000.00</p>
        </div>
      </div>
      <div className="items-center justify-center pt-[72px] flex gap-[38px]">
        <div className="rounded-[10px] bg-[#FBEBB5] py-4 px-6">1</div>
        <div className="rounded-[10px] bg-pag py-4 px-6">2</div>
        <div className="rounded-[10px] bg-pag py-4 px-6">3</div>
        <div className="rounded-[10px] bg-pag py-4 px-6">Next</div>
      </div>
      <div className="mt-[92px] py-[96px] bg-rose flex justify-center w-full ">
        <div className="flex justify-between max-w-[1220px] w-full">
          <div className="flex flex-col">
            <p className="text-[32px] leading-normal  ">Free Delivery</p>
            <p className="text-[#9F9F9F] text-xl leading-normal max-w-[376px]">
              For all oders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[32px] leading-normal  ">90 Days Return</p>
            <p className="text-[#9F9F9F] text-xl leading-normal max-w-[376px]">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[32px] leading-normal  ">Secure Payment</p>
            <p className="text-[#9F9F9F] text-xl leading-normal max-w-[376px]">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

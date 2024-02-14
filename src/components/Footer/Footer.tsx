import { Ancor } from "../Header/Ancor";

export const Footer = () => {
  return (
    <div className="flex justify-between pt-20 pb-20 max-w-[1240px] m-auto w-full px-[100px]">
      <div className="flex flex-col h-auto justify-center items-start ">
        <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral</p>
        <p className="text-[#9F9F9F]">Gables,</p>
        <p className="text-[#9F9F9F]"> FL 33134 USA</p>
      </div>
      <div className="flex flex-col gap-[55px]">
        <p className="text-[#9F9F9F]">Links</p>
        <div className="flex flex-col gap-[45px]">
          <Ancor name="Home" />
          <Ancor name="Shop" />
          <Ancor name="About" />
          <Ancor name="Contact" />
        </div>
      </div>

      <div className="flex flex-col gap-[55px]">
        <p className="text-[#9F9F9F]">Help</p>
        <div className="flex flex-col gap-[45px]">
          <Ancor name="Payment Options" />
          <Ancor name="Returns" />
          <Ancor name="Privacy Policies" />
        </div>
      </div>

      <div className="flex flex-col gap-[55px]">
        <p className="text-[#9F9F9F]">Newsletter</p>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <input
              type="text"
              className="text-[14px] outline-none text-[#9F9F9F]"
              placeholder="Enter Your Email Address"
            />
            <div className="border-[1px] border-black w-[200px]"></div>
          </div>
          <div className="flex flex-col">
            <button className=" text-[14px]">SUBSCRIBE</button>
            <div className="border-[1px] border-black w-[75px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

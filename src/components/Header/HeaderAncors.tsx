import { Ancor } from "./Ancor";

export const HeaderAncors = () => {
  return (
    <div className="gap-[75px] flex">
      <Ancor name="Home" href="/" />
      <Ancor name="Shop" href="/shop" />
      <Ancor name="About" href="/about" />
      <Ancor name="Contact" href="/contact" />
    </div>
  );
};

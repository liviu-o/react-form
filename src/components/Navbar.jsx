import HRPLogo from "../assets/hrp-logo.svg";
import WifiIcon from "./WifiIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center md:h-[100px] px-4 py-4 md:px-20 bg-[#00566b]">
      <img className="h-[40px] w-[127px] md:h-[55px] md:w-[177px] text-white" src={HRPLogo} />
      <WifiIcon />
    </div>
  );
}

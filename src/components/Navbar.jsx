import HRPLogo from "../assets/hrp-logo.svg";
import WifiIcon from "./WifiIcon";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[100px] px-20 bg-[#00566b]">
      <img className="h-[50px] text-white" src={HRPLogo} />
      <WifiIcon />
    </div>
  );
}

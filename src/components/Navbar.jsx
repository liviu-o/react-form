import HRPLogo from "../Logos/hrp-logo.svg";
import WifiIcon from "../Logos/Wireless-icon.svg";

export default function Navbar() {
  return (
    <div className="flex bg-slate-700 justify-between items-center h-[100px] px-20 bg-[#00566b]">
      <img className="h-[50px] text-white" src={HRPLogo} />
      <img className="h-[50px] text-white" src={WifiIcon} />
    </div>
  );
}
import Searchbar from "../Searchbar";
import { IoSunny } from "react-icons/io5";

function DesktopHeader() {
  return (
    <div className="desktop-header-container">
      <Searchbar />
      <IoSunny className="dynamic-mode-switch" size={30} />
    </div>
  );
}

export default DesktopHeader;
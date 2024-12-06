import './header.css';
import MobileHeader from "./mobile-header";
import DesktopHeader from "./desktop-header";

function Header() {

  return (
    <header>
      <div className='desktop-header'>
        <DesktopHeader />
      </div>
      
      <div className='mobile-header'>
        <MobileHeader />
      </div>
    </header>
  );
}

export default Header;
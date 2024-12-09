import './header.css';
import MobileHeader from "./mobile-header";

function Header() {

  return (
    <header>
      <div className='mobile-header'>
        <MobileHeader />
      </div>
    </header>
  );
}

export default Header;
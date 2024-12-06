import "./header.css";
import Image from "next/image";

function MobileHeader() {
  return (
    <div className="mobile-header">
      <div>
        <Image
          src="/logo-cantor.png"
          alt="Cantor Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default MobileHeader;

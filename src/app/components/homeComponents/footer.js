import "./home.css";
import { FaQuestion } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomeFooter = () => {
  return (
    <footer className="homeFooter" id="homeFooter">
      <h2 className="homeFooter-title">
        How to find us <FaQuestion size={17} />
      </h2>
      <address className="homeFooter-address">
        Cantor College
        <br />
        Main Street
        <br />
        Sheffield
        <br />
        SC4 2BB
        <br />
        <span>
          <FaPhoneAlt size={12} />
          Tel:{" "}
          <a href="tel:+4413212340235" className="footer-link">
            (01321) 2340 235
          </a>
        </span>
        <br />
        <span>
          <FaFax size={12} /> Fax:{" "}
          <a href="fax:+4413212340236" className="footer-link">
            (01321) 2340 236
          </a>
        </span>
        <br />
        <span>
          <MdEmail size={12} /> Email:{" "}
          <a href="mailto:info@cantorcollege.ac.uk" className="footer-link">
            info@cantorcollege.ac.uk
          </a>
        </span>
      </address>
    </footer>
  );
};

export default HomeFooter;

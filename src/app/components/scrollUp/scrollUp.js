import './scrollUp.css';
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  return(
    <Link href='#' className='scroll-up-btn'><FaArrowUp /></Link>
  );
}

export default ScrollUp;
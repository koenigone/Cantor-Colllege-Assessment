import './scrollUp.css';
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  return(
    <Link href='#' className='scroll-up-btn' aria-label='Scroll to top'><FaArrowUp /></Link>
  );
}

export default ScrollUp;
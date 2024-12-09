import "./courses.css";
import Link from "next/link";
import { ImBooks } from "react-icons/im";

const CoursesHeader = () => {
  return (
    <section className="courses-header">
      <div>
        <h1>
          Available Courses <ImBooks size={25} />
        </h1>
      </div>

      <div>
        <p>
          Below, you will find a list of courses available at <span className="highlight">Cantor College</span>.
          See what interests you and feel free to <Link href="/#homeFooter">reach out to us!</Link>
        </p>
      </div>
    </section>
  );
};

export default CoursesHeader;

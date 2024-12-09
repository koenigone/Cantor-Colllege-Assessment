import "./services.css";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa6";

const ServicesIntroduction = () => {
  return (
    <section id="servicesIntro">
      <div>
        <h1>
          Partner with Cantor College: Unlock Expertise, Innovation, and Growth{" "}
          <FaLightbulb size={20} />
        </h1>
      </div>

      <div className="service-intro-p">
        <p>
          At Cantor College, we believe in the power of collaboration between
          education and industry. Our College offers a range of specialized
          services designed to support businesses in achieving their goals
          through cutting-edge expertise, innovation, and tailored solutions.
          With a focus on Computing, Design, and Technology, we are uniquely
          positioned to help your business thrive in an increasingly digital
          world.
        </p>
      </div>

      <div className="service-main-image">
        <Image
          src="/CantorLectureTheatre4.JPG"
          alt="image of cantor lecture theatre"
          width={800}
          height={250}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default ServicesIntroduction;

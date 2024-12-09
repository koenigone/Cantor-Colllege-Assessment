import "./forStudents.css";
import { FaEnvira } from "react-icons/fa6";

const Invitation = () => {
  return (
    <section className="invitation-container" id="invitation">
      <div>
        <h1>
          Experience Cantor College <FaEnvira size={20} color="green" />
        </h1>
      </div>
      <div>
        <p>
          Cantor College’s facilities are designed to enhance your learning
          experience and support your academic and personal growth. We invite
          you to explore our campus, discover our resources, and make the most
          of everything we have to offer.
        </p>
      </div>
    </section>
  );
};

export default Invitation;

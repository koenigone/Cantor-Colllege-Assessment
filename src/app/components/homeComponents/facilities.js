import "./home.css";
import Image from "next/image";
import { BiSolidBuildings } from "react-icons/bi";

const Facilities = () => {

  // facilities array
  const facilitiesServices = [
    { key: 1, facility: "Wi-Fi technology" },
    { key: 2, facility: "Pool teaching rooms, including classrooms to teach from 25 - 80 students" },
    { key: 3, facility: "Specialist faculty facilities" },
    { key: 4, facility: "A double-height lecture theatre at first and second floor level" },
    { key: 5, facility: "Dramatic three-storey glass open atrium" },
    { key: 6, facility: "Meeting rooms" },
    { key: 7, facility: "Office accommodation" },
    { key: 8, facility: "Specialist IT facilities" },
    { key: 9, facility: "Reception desk area" },
    { key: 10, facility: "Catering outlet" },
    { key: 11, facility: "Parking for disabled badge holders" },
    { key: 12, facility: "Cycle racks" },
    { key: 13, facility: "Gallery" },
  ];

  // images array
  const images = [
    { key: 1, src: "/IMG_1099.jpeg", alt: "Wi-Fi technology image" },
    { key: 2, src: "/cantor-gallery.jpg", alt: "Teaching room image" },
    { key: 3, src: "/Cantor-atrium 3.jpg", alt: "Specialist facilities image" },
    { key: 4, src: "/cantor-classroom.jpg", alt: "Classroom image" },
  ];

  return (
    <section className="facilities" id="facilities">
      <div>
        <div className="facilities-title">
          <h1>
            Facilities <BiSolidBuildings size={17} />
          </h1>
        </div>

        <div className="facilities-paragraph">
          <p>
            The College is located in the attractive and pleasantly refurbished
            Building. The building houses computing laboratories, and
            lecture/tutorial rooms. It has its own catering facilities and
            student work areas. There is also a car park to the back of the
            building.
          </p>
          <br />
          <p>
            Our building has space of <span className="highlight">9500m²</span>,
            houses over <span className="highlight">240</span> staff and
            provides teaching space for more than{" "}
            <span className="highlight">1600</span> students.
          </p>
        </div>
      </div>

      <div className="facilities-list">
        <div className="facilities-list-title">
          <h2>Facilities include:</h2>
        </div>

        <div className="facilities-list-container">
          <div className="facilities-list-items">
            <ul>
              {facilitiesServices.map((service) => (
                <li key={service.key}>{service.facility}</li>
              ))}
            </ul>
          </div>

          <div className="facilities-image-grid">
            {images.map((image) => (
              <Image
                key={image.key}
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                layout="responsive"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;

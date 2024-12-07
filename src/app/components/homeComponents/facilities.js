import './home.css';
import Image from 'next/image';

const Facilities = () => {
  const facilitiesServices = [
    "Wi-Fi technology",
    "Pool teaching rooms, including classrooms to teach from 25 - 80 students",
    "Specialist faculty facilities",
    "A double-height lecture theatre at first and second floor level",
    "Dramatic three-storey glass open atrium",
    "Meeting rooms",
    "Office accommodation",
    "Specialist IT facilities",
    "Reception desk area",
    "Catering outlet",
    "Parking for disabled badge holders",
    "Cycle racks",
    "Gallery"
  ];

  const images = [
    { key: 1, src: "/IMG_1099.jpeg", alt: "Wi-Fi technology image" },
    { key: 2, src: "/cantor-gallery.jpg", alt: "Teaching room image" },
    { key: 3, src: "/Cantor-atrium 3.jpg", alt: "Specialist facilities image" },
    { key: 4, src: "/cantor-classroom.jpg", alt: "Classroom image" },
  ];

  return (
    <section className='facilities' id='facilities'>
      <div className='facilities-title'>
        <h1>Facilities</h1>
      </div>

      <div className='facilities-paragraph'>
        <p>
          The College is located in the attractive and pleasantly refurbished Building.
          The building houses computing laboratories, and lecture/tutorial rooms. It has 
          its own catering facilities and student work areas. There is also a car park to 
          the back of the building.
        </p>
        <br />
        <p>
          Our building has space of <span className='pink'>9500m²</span>, houses over <span className='pink'>240</span> staff and provides teaching 
          space for more than <span className='pink'>1600</span> students.
        </p>
      </div>

      <div className='facilities-list'>
        <div className='facilities-list-title'>
          <h2>Facilities include:</h2>
        </div>

        <div className='facilities-list-container'>
          <div className='facilities-list-items'>
            <ul>
              {facilitiesServices.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className='facilities-image-grid'>
            {images.map(image => (
              <Image 
                key={image.key} 
                src={image.src} 
                alt={image.alt} 
                width={100} 
                height={100} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
import './home.css';
import Image from 'next/image';

const Facilities = () => {
  const facilitiesServices = [
    { key: 1, name: "Wi-Fi technology" },
    { key: 2, name: "Pool teaching rooms, including classrooms to teach from 25 - 80 students" },
    { key: 3, name: "Specialist faculty facilities" },
    { key: 4, name: "A double-height lecture theatre at first and second floor level" },
    { key: 5, name: "Dramatic three-storey glass open atrium" },
    { key: 6, name: "Meeting rooms" },
    { key: 7, name: "Office accommodation" },
    { key: 8, name: "Specialist IT facilities" },
    { key: 9, name: "Reception desk area" },
    { key: 10, name: "Catering outlet" },
    { key: 11, name: "Parking for disabled badge holders" },
    { key: 12, name: "Cycle racks" },
    { key: 13, name: "Gallery" }
  ];
  
  return(
    <section className='facilities'>
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
              {facilitiesServices.map(service => (
                <li key={service.key}>{service.name}</li>
              ))}
            </ul>
          </div>

          <div className='facilities-image-grid'>
            <Image 
              src="/IMG_1099.jpeg" 
              alt="Cantor Logo" 
              width={100}
              height={100}
            />
            <Image 
              src="/cantor-gallery.jpg" 
              alt="Cantor Logo" 
              width={100}
              height={100}
            />
            <Image 
              src="/Cantor-atrium 3.jpg" 
              alt="Cantor Logo" 
              width={100}
              height={100}
            />
            <Image 
              src="/cantor-classroom.jpg" 
              alt="Cantor Logo" 
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities
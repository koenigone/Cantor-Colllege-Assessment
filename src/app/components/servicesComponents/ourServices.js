import "./services.css";
import { FaTools, FaPenFancy } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";

const OurServices = () => {
  const services = [
    {
      title: "Custom Training and Development Programs",
      icon: <FaTools />,
      description:
        "Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.",
    },
    {
      title: "Research and Development Partnerships",
      icon: <FaArrowUpRightDots />,
      description:
        "Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.",
    },
    {
      title: "Design and Technology Consultancy",
      icon: <FaPenFancy />,
      description:
        "Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.",
    },
    {
      title: "Internships and Graduate Recruitment",
      icon: <GiGraduateCap />,
      description:
        "Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience.",
    },
    {
      title: "Event Hosting and Sponsorship",
      icon: <MdEventAvailable />,
      description:
        "Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.",
    },
  ];

  return (
    <section className="our-services-container" id="ourServices">
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <article key={index}>
          <h3>
            {service.icon} - {service.title}
          </h3>
          <p>{service.description}</p>
        </article>
      ))}
    </section>
  );
};

export default OurServices;

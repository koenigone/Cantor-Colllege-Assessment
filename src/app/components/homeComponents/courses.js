import "./home.css";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

const OurCourses = () => {
  // course array - desription is a nested array
  const courses = [
    {
      id: "computingCourse",
      category: "Computing Courses",
      image: "/ACES-032-Computing-Playstation-Lab.jpg",
      imageAlt: "image from the computing course",
      description: [
        {
          key: 1,
          text: "The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.",
        },
        {
          key: 2,
          text: "The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.",
        },
        {
          key: 3,
          text: "The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.",
        },
      ],
    },
    {
      id: "designCourse",
      category: "Design Courses",
      image: "/IMG_1089.jpeg",
      imageAlt: "image from the design course",
      description: [
        {
          key: 4,
          text: "The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.",
        },
        {
          key: 5,
          text: "The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.",
        },
        {
          key: 6,
          text: "You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.",
        },
      ],
    },
  ];

  return (
    <section className="courses-offered">
      <div>
        <h1>
          Courses Offered <FaBook size={17} />
        </h1>
      </div>
      <div>
        {courses.map((course) => (
          <div key={course.id} className="course-item" id={course.id}>
            <div>
              <h2>{course.category}</h2>
              <Image
                src={course.image}
                alt={course.imageAlt}
                width={600}
                height={600}
                layout="responsive"
              />
            </div>
            <div>
              {course.description.map((text) => (
                <p key={text.key}>{text.text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCourses;

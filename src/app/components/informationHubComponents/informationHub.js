import "./informationHub.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdInformationCircle } from "react-icons/io";
import {
  FaRegNewspaper,
  FaCoins,
  FaUserTie,
  FaUsers,
  FaBuilding,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { ImSpoonKnife } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";

const InformationForStaff = () => {
  const showImages = [
    { source: "/20230829_111351.jpg", alt: "image of cantor building" },
    { source: "/20230526_090718.jpg", alt: "coloured background" },
    {
      source: "/IMG_1298.jpeg",
      alt: "image of a beautiful building near cantor",
    },
  ];

  const articles = [
    {
      title: "News",
      icon: <FaRegNewspaper />,
      content:
        "Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one-day event.",
    },
    {
      title: "Academic Registry",
      icon: <HiAcademicCap />,
      content:
        "For academic regulations, assessment, awards, student records, and course validation.",
    },
    {
      title: "Catering Services",
      icon: <ImSpoonKnife />,
      content:
        "Contact the Catering Services regarding on and off-site catering.",
    },
    {
      title: "Financial Services",
      icon: <FaCoins />,
      content:
        "The financial team based on the 2nd Floor is responsible for all areas of student finance as well as College budgeting.",
    },
    {
      title: "Information Systems Services",
      icon: <FaComputer />,
      content:
        "The ISS team delivers the College’s computing facilities, including all hardware and software. They also run the staff helpdesk.",
    },
    {
      title: "Marketing Services",
      icon: <FaUsers />,
      content:
        "The Marketing Team will help promote events and new courses. They will assist with press release preparation.",
    },
    {
      title: "Personnel Services",
      icon: <FaUserTie />,
      content:
        "All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.",
    },
    {
      title: "Facilities",
      icon: <FaBuilding />,
      content:
        "The facilities are responsible for the general care and maintenance of the College. All enquiries should be directed via the main helpdesk. ",
      link: "/forStudents#facilities",
      linkText: "visit our facilities",
    },
  ];

  return (
    <section id="staffInformation">
      <div>
        <h1>
          Information for Staff <IoMdInformationCircle size={25} />
        </h1>
      </div>

      <div className="information-hub-image-container">
        {showImages.map((image, index) => (
          <div key={index} className="image-wrapper">
            <Image
              src={image.source}
              alt={image.alt}
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </div>

      <div className="informationhub-article-container">
        {articles.map((article, index) => (
          <article key={index}>
            <h3>
              {article.icon} {article.title}
            </h3>
            <p>
              {article.content}
              {article.link && (
                <Link href={article.link}>{article.linkText}</Link>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InformationForStaff;

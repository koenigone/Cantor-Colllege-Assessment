import "./informationHub.css";
import Link from "next/link";

const articles = [
  {
    title: "News",
    content: "Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one-day event."
  },
  {
    title: "Academic Registry",
    content: "For academic regulations, assessment, awards, student records, and course validation."
  },
  {
    title: "Catering Services",
    content: "Contact the Catering Services regarding on and off-site catering."
  },
  {
    title: "Financial Services",
    content: "The financial team based on the 2nd Floor is responsible for all areas of student finance as well as College budgeting."
  },
  {
    title: "Information Systems Services",
    content: "The ISS team delivers the College’s computing facilities, including all hardware and software. They also run the staff helpdesk."
  },
  {
    title: "Marketing Services",
    content: "The Marketing Team will help promote events and new courses. They will assist with press release preparation."
  },
  {
    title: "Personnel Services",
    content: "All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor."
  },
  {
    title: "Facilities",
    content: "The facilities are responsible for the general care and maintenance of the College. All enquiries should be directed via the main helpdesk.",
    link: "/forStudents#facilities",
    linkText: "visit our facilities"
  }
];

const InformationForStaff = () => {
  return (
    <section id="staffInformation">
      <div>
        <h1>Information for Staff</h1>
      </div>

      <div className="informationhub-article-container">
        {articles.map((article, index) => (
          <article key={index}>
            <h2>{article.title}</h2>
            <p>
              {article.content}
              {article.link && <Link href={article.link}>{article.linkText}</Link>}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InformationForStaff;
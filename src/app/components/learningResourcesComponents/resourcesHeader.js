import "./learningResources.css";

const ResourcesHeader = () => {

  const paragraphs = [
    "All students and staff of the College are entitled to register as members of the Library and Resource Centre and to use the facilities for the purpose of their course of study or College employment.",
    "Membership may also be extended to other individuals and to persons nominated from other organisations:  a fee is usually charged.  Access to the Library and Resource Centre for study purposes may be made available to non-members by arrangement. Details are available in the External Services leaflet.",
    "Use of facilities implies acceptance of the Library and Resource Centre rules printed below.  These are designed to protect the interests of all users of Library and Resource Centre and to ensure that the College operates within the law and can carry out its functions efficiently and effectively.  The Library and Resource Centre rules apply in principle to all sites, including workstation rooms and site libraries, notwithstanding some variations in practice in the site libraries.  Admission to the Library and Resource Centre is conditional upon observation of the rules and the staff are empowered to enforce them.",
    "Breaches of the rules may be dealt with by specific Library and Resource Centre Disciplinary Action (see below), including the withdrawal of some access, and if appropriate by invoking the College’s Regulations for Students, in the case of students, or in the case of staff through the appropriate College procedures as set out in the Staff Handbook."
  ];

  return (
    <section id="resourcesRules">
      <div>
        <h1>Rules Governing the Use of the Library and Resource Centre</h1>
      </div>
      <div className="resources-header-p">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default ResourcesHeader;

"use client";
import "./Sidebar.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoMdBuild, IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { RiAlignItemLeftFill } from "react-icons/ri";
import React, { useState } from "react";

/* STRUCTURE
- initialize useStates for sidebar & sidebar children
- functions to control the useStates (open/close sidebar - open sidebarChild & close previous)
- sidebar children arrays to be used in the main sidebar array
- main sidebar array objects
- Nav structure:
  - toggle sidebar button (burger)
  - overlay that gets displayed when mobile sidebar is toggled
  - main sidebar menu structure
    - parent list items (uses main sidebar array)
    - child list items (uses sidebar children arrays)
*/
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // closed is default
  const [sidebarChildOpen, setSidebarChildOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSidebarChildMenu = (childKey) => {
    // keep only one child open at the time - opened? close the previous
    setSidebarChildOpen((previousKey) =>
      previousKey === childKey ? false : childKey
    );
  };

  // SIDEBAR CHILD MENU TABS
  const homeTabs = [
    {
      key: 1,
      name: "About us",
      link: "/#aboutUs",
      linkLabel: "home - about us section",
    },
    {
      key: 2,
      name: "Facilities",
      link: "/#facilities",
      linkLabel: "home - facilities section",
    },
    {
      key: 3,
      name: "Computing courses",
      link: "/#computingCourse",
      linkLabel: "home - computing courses",
    },
    {
      key: 4,
      name: "Design courses",
      link: "/#designCourse",
      linkLabel: "home - design courses",
    },
  ];

  const forStudentsTabs = [
    {
      key: 1,
      name: "Explore",
      link: "/forStudents#introduction",
      linkLabel: "for students - introduction",
    },
    {
      key: 2,
      name: "Our facilities",
      link: "/forStudents#ourFacilities",
      linkLabel: "for students- our facilities",
    },
    {
      key: 3,
      name: "Experience us",
      link: "/forStudents#invitation",
      linkLabel: "for students - invitation",
    },
  ];

  const informationHubTabs = [
    {
      key: 1,
      name: "Staff information",
      link: "/informationHub#staffInformation",
      linkLabel: "information hub - staff information",
    },
  ];

  const servicesTabs = [
    {
      key: 1,
      name: "Partner with us",
      link: "/services#servicesIntro",
      linkLabel: "services - partner with us",
    },
    {
      key: 2,
      name: "Our services",
      link: "/services#ourServices",
      linkLabel: "services - our services",
    },
    {
      key: 3,
      name: "Why us",
      link: "/services#whyUs",
      linkLabel: "services - why us",
    },
    {
      key: 4,
      name: "Get in touch",
      link: "/services#getInTouch",
      linkLabel: "services - get in touch",
    },
  ];

  const coursesTabs = [
    {
      key: 1,
      name: "Available courses",
      link: "/courses#courses",
      linkLabel: "courses - available courses",
    },
  ];

  const resourcesTabs = [
    {
      key: 1,
      name: "Access rules",
      link: "/learningResources#accessRules",
      linkLabel: "resources - access rules",
    },
    {
      key: 2,
      name: "Use of facilities",
      link: "/learningResources#facilitiesUse",
      linkLabel: "resources - use of facilities",
    },
  ];

  // SIDEBAR PARENT TABS
  const availableTabs = [
    {
      key: 1,
      name: "Home",
      link: "/",
      linkLabel: "link to home page",
      tabs: homeTabs,
      icon: <IoMdHome />,
    },
    {
      key: 2,
      name: "For Students",
      link: "/forStudents",
      linkLabel: "link to for students page",
      tabs: forStudentsTabs,
      icon: <FaUser />,
    },
    {
      key: 3,
      name: "Information Hub",
      link: "/informationHub",
      linkLabel: "link to information hub page",
      tabs: informationHubTabs,
      icon: <IoInformation />,
    },
    {
      key: 4,
      name: "Services",
      link: "/services",
      linkLabel: "link to services page",
      tabs: servicesTabs,
      icon: <IoMdBuild />,
    },
    {
      key: 6,
      name: "Courses",
      link: "/courses",
      linkLabel: "link to courses page",
      tabs: coursesTabs,
      icon: <RiAlignItemLeftFill />,
    },
    {
      key: 5,
      name: "Learning Resources",
      link: "/learningResources",
      linkLabel: "link to learning resources page",
      tabs: resourcesTabs,
      icon: <ImBooks />,
    },
  ];

  return (
    <nav>
      <button className="burger" onClick={toggleSidebar}>
        &#9776;
      </button>

      {sidebarOpen && (
        <div className="close-sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <menu className={sidebarOpen ? "sidebar active" : "sidebar"}>
        <div className="logo">
          <Image
            src="/logo-cantor.png"
            alt="Cantor Logo"
            width={100}
            height={100}
          />
        </div>

        <menu className="sidebar-tabs">
          {availableTabs.map((tab) => (
            <li key={tab.key} className="parent-list-item">
              <div className="parent-item-container">
                <Link href={tab.link} aria-label={tab.linkLabel}>
                  {tab.icon} {tab.name}
                </Link>
                <span onClick={() => toggleSidebarChildMenu(tab.key)}>
                  <IoIosArrowDown />
                </span>
              </div>

              <div
                className={
                  sidebarChildOpen === tab.key
                    ? "sidebarChild childActive"
                    : "sidebarChild"
                }
              >
                <ul className="child-list-item">
                  {tab.tabs.map((item) => (
                    <li key={item.key} className="child-list-item">
                      <Link href={item.link} aria-label={item.linkLabel}>
                        - {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </menu>
      </menu>
    </nav>
  );
};

export default Sidebar;

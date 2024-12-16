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
    { key: 1, name: "About us", link: "/#aboutUs" },
    { key: 2, name: "Facilities", link: "/#facilities" },
    { key: 3, name: "Computing courses", link: "/#computingCourse" },
    { key: 4, name: "Design courses", link: "/#designCourse" },
  ];

  const forStudentsTabs = [
    { key: 1, name: "Explore", link: "/forStudents#introduction" },
    { key: 2, name: "Our facilities", link: "/forStudents#ourFacilities" },
    { key: 3, name: "Experience us", link: "/forStudents#invitation" },
  ];

  const informationHubTabs = [
    {
      key: 1,
      name: "Staff information",
      link: "/informationHub#staffInformation",
    },
  ];

  const servicesTabs = [
    { key: 1, name: "Partner with us", link: "/services#servicesIntro" },
    { key: 2, name: "Our services", link: "/services#ourServices" },
    { key: 3, name: "Why us", link: "/services#whyUs" },
    { key: 4, name: "Get in touch", link: "/services#getInTouch" },
  ];

  const coursesTabs = [
    { key: 1, name: "Available courses", link: "/courses#courses" },
  ];

  const resourcesTabs = [
    {
      key: 1,
      name: "Access rules",
      link: "/learningResources#accessRules",
    },
    {
      key: 2,
      name: "Use of facilities",
      link: "/learningResources#facilitiesUse",
    },
  ];

  // SIDEBAR PARENT TABS
  const availableTabs = [
    { key: 1, name: "Home", link: "/", tabs: homeTabs, icon: <IoMdHome /> },
    {
      key: 2,
      name: "For Students",
      link: "/forStudents",
      tabs: forStudentsTabs,
      icon: <FaUser />,
    },
    {
      key: 3,
      name: "Information Hub",
      link: "/informationHub",
      tabs: informationHubTabs,
      icon: <IoInformation />,
    },
    {
      key: 4,
      name: "Services",
      link: "/services",
      tabs: servicesTabs,
      icon: <IoMdBuild />,
    },
    {
      key: 6,
      name: "Courses",
      link: "/courses",
      tabs: coursesTabs,
      icon: <RiAlignItemLeftFill />,
    },
    {
      key: 5,
      name: "Learning Resources",
      link: "/learningResources",
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
                <Link href={tab.link}>
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
                      <Link href={item.link}>- {item.name}</Link>
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
"use client";
import "./Sidebar.css";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./Searchbar";
import { IoIosArrowDown, IoMdBuild, IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { RiAlignItemLeftFill } from "react-icons/ri";
import React, { useState } from "react";

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [openMenuKey, setOpenMenuKey] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the state
};

  const toggleMenu = (key) => {
    setOpenMenuKey((prevKey) => (prevKey === key ? null : key));
  };

  const homeTabs = [
    { key: 1, name: "About us", link: "/#aboutUs" },
    { key: 2, name: "Facilities include", link: "/#facilities" },
  ];

  const forStudentsTabs = [
    { key: 1, name: "Introduction", link: "/forStudents#introduction" },
    { key: 2, name: "Our facilities", link: "/forStudents#ourFacilities" },
    { key: 3, name: "Invitation", link: "/forStudents#invitation" },
  ];

  const informationHubTabs = [
    {
      key: 1,
      name: "Information hub",
      link: "/informationHub#staffInformation",
    },
  ];

  const servicesTabs = [
    { key: 1, name: "Services", link: "/services#servicesIntro" },
    { key: 2, name: "Our services", link: "/services#ourServices" },
    { key: 3, name: "Why us", link: "/services#whyUs" },
    { key: 4, name: "Get in touch", link: "/services#getInTouch" },
  ];

  const resourcesTabs = [
    {
      key: 1,
      name: "Resources rules",
      link: "/learningResources#resourcesRules",
    },
    { key: 2, name: "Access rules", link: "/learningResources#accessRules" },
    {
      key: 3,
      name: "Facilities use",
      link: "/learningResources#facilitiesUse",
    },
  ];

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
      <button className='burger' onClick={toggleSidebar}>&#9776;</button>
      <menu className={sidebarOpen ? "sidebar active" : "sidebar"}>
        <div className="logo">
          <Image
            src="/logo-cantor.png"
            alt="Cantor Logo"
            width={100}
            height={100}
          />
        </div>

        <div className="mobile-searchbar">
          <Searchbar />
        </div>

        <menu className="sidebar-tabs">
          {availableTabs.map((tab) => (
            <li key={tab.key} className="parent-list-item">
              <div className="parent-item-container">
                <Link href={tab.link}>
                  {tab.icon} {tab.name}
                </Link>
                <span onClick={() => toggleMenu(tab.key)}>
                  <IoIosArrowDown />
                </span>
              </div>

              <div>
                {openMenuKey === tab.key && tab.tabs && tab.tabs.length > 0 && (
                  <ul className="submenu">
                    {tab.tabs.map((item) => (
                      <li key={item.key} className="child-list-item">
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </menu>
      </menu>
    </nav>
  );
};

export default Sidebar;

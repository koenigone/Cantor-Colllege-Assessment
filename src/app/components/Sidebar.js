'use client'
import './Sidebar.css';
import Image from 'next/image';
import Link from 'next/link';
import Searchbar from './Searchbar';
import { IoIosArrowDown, IoMdBuild, IoMdHome } from "react-icons/io";
import { FaUser } from 'react-icons/fa';
import { IoInformation } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { RiAlignItemLeftFill } from "react-icons/ri";
import React, { useState } from "react";

const Sidebar = () => {

  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
      setMenuOpen(!menuOpen); // Toggle the state
  };

  const availableTabs = [ // tabs objects
    { key: 1, name: 'Home', to: '/', icon: <IoMdHome /> },
    { key: 2, name: 'For Students', to: '/forStudents', icon: <FaUser /> },
    { key: 3, name: 'Information Hub', to: '/informationHub', icon: <IoInformation /> },
    { key: 4, name: 'Services', to: '/services', icon: <IoMdBuild /> },
    { key: 6, name: 'Courses', to: '/courses', icon: <RiAlignItemLeftFill /> },
    { key: 5, name: 'Learning Resources', to: '/learningResources', icon: <ImBooks /> }
  ];

  return (
    <nav>
      <button className='burger' onClick={toggleMenu}>&#9776;</button>
      <menu className={menuOpen ? "sidebar active" : "sidebar"}>
        <div className="logo">
          <Image 
            src="/logo-cantor.png" 
            alt="Cantor Logo" 
            width={100}
            height={100}
          />
        </div>

        <div className='mobile-searchbar'>
          <Searchbar />
        </div>

        <div className="sidebar-tabs">
          <menu>
            {availableTabs.map(tab => (
              <li key={tab.key}>
                <Link href={tab.to}>
                  <span>{tab.icon} {tab.name}</span>
                </Link>
                <IoIosArrowDown className="dropdown-icon" />
              </li>
            ))}
          </menu>
        </div>

      </menu>
    </nav>
  );
}

export default Sidebar;
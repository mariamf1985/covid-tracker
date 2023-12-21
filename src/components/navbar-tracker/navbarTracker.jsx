import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiPieChartLine } from "react-icons/ri";
import { TiThMenuOutline,TiThLargeOutline } from "react-icons/ti";
import { TfiLayoutTab,TfiLayersAlt,TfiStatsUp } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoLogoFlickr } from "react-icons/io5";


const NavbarTracker = () => {
  
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  const getNavItemStyle = (navItem) => {
    const baseStyle = "text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded";
    return activeNavItem === navItem ? 'bg-secondarybg text-primarybackground w-full p-4 rounded' : baseStyle;
  };

  return (
    <nav className="flex flex-col items-center h-screen w-20 bg-primarybackground">
      <ul className="h-full flex flex-col items-center justify-around">
        <li>
          <Link to="/">
            <img src="../src/assets/images/coronavirus.png" className="animate-spin-slow w-12 mt-3 mb-3" alt="Coronavirus" />
          </Link>
        </li>
        <li onClick={() => handleNavItemClick("tracker-1")} className={getNavItemStyle("tracker-1")} >
          <Link to="/tracker-1">
            <RiPieChartLine size={27} />
          </Link>
        </li>
        <li onClick={() => handleNavItemClick("tracker-2")} className={getNavItemStyle("tracker-2")} >
          <Link to="/tracker-2">
            <TiThMenuOutline size={27}/>
          </Link>
        </li>
        <li onClick={() => handleNavItemClick("tracker-3")} className={getNavItemStyle("tracker-3")} >
          <Link to="/tracker-3">
            <TiThLargeOutline size={27}/>
          </Link>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <TfiLayoutTab size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <TfiLayersAlt size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <TfiStatsUp size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <AiOutlineGlobal size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <FaRegCommentAlt size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a>
            <IoLogoFlickr size={27}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTracker;

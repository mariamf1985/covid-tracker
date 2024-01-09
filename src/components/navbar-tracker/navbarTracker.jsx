import React from "react";
import { RiPieChartLine } from "react-icons/ri";
import { TiThMenuOutline,TiThLargeOutline } from "react-icons/ti";
import { TfiLayoutTab,TfiLayersAlt,TfiStatsUp } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoLogoFlickr } from "react-icons/io5";

const NavbarTracker = () => {
  return (
    <nav className="flex flex-col  items-center h-screen w-20  bg-primarybackground">
       <ul className="h-full flex flex-col items-center justify-around">
        <li>
          <a href="">
          <img src="../src/assets/images/coronavirus.png"  className="animate-spin-slow w-12 mt-3 mb-3"></img>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <RiPieChartLine size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <TiThMenuOutline size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <TiThLargeOutline size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <TfiLayoutTab size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <TfiLayersAlt size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <TfiStatsUp size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <AiOutlineGlobal size={27}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <FaRegCommentAlt size={25}/>
          </a>
        </li>
        <li className="text-secondarybg hover:bg-secondarybg hover:text-primarybackground w-full p-4 rounded">
          <a href="">
            <IoLogoFlickr size={27}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarTracker;

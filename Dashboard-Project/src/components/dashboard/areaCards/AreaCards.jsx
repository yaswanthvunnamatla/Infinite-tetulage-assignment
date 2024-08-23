import React from "react";
import AreaCard from "./AreaCard";
import AreaProgressChart from "../areaCharts/AreaProgressChart"
import {
  FaUser,
  FaDollarSign,
  FaChartBar,
  FaBox,
  FaCog,
  FaBell,
  FaQuestionCircle,
  FaChartLine,
  FaCalendarAlt,
  FaUsers,
  FaComment,
} from "react-icons/fa";
import "./AreaCards.scss";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoMdStarOutline } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { MdHistory } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { TbExchange } from "react-icons/tb";
import { BsFileBarGraphFill } from "react-icons/bs";

const AreaCards = () => {
  const cardDetails = [
    { icon: <GoArrowDownLeft size={24} />, name: "Deposit" },
    { icon: <GoArrowUpRight size={24} />, name: "Withdraw" },
    { icon: <LuSettings size={24} />, name: "Settings" },
    { icon: <BsPersonFillCheck size={24} />, name: "Verification" },
    { icon: <IoMdStarOutline size={24} />, name: "Bonuses" },
    { icon: <GoGraph size={24} />, name: "MTS" },
    { icon: <HiMiniArrowsRightLeft size={24} />, name: "Transfer" },
    { icon: <MdHistory size={24} />, name: "History" },
    { icon: <BsPerson size={24} />, name: "Partner" },
    { icon: <TbExchange size={24} />, name: "Exchange" },
    { icon: <BsFileBarGraphFill size={24} />, name: "Analytics" },
  ];

  return (
    <div className="content-area-1">
      <div className="content-area-cards">
      {cardDetails.map((card, index) => (
        <AreaCard key={index} icon={card.icon} name={card.name} />
      ))}
      </div>
      <AreaProgressChart />
      
    </div>
  );
};

export default AreaCards;


import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { MdNotificationsNone } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <section className="content-area-top">
      <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Dashboard</h2>
      </div>
      <div className="area-top-r">
        <div className="search-bar-container">
          <IoIosSearch className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <MdNotificationsNone className="notifications-icon" />
      </div>
    </section>
  );
};

export default AreaTop;

import { SiAirbnb } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";

const Navtop = ({ showMenu, setShowMenu }) => {
  return (
    <div className="nav-top">
      <div className="logo-container">
        <SiAirbnb className="airbnb-icon" />
        <span className="logo-name">airbnb</span>
      </div>
      <div className="tabs-container tabs-container2">
        <button>Stays</button>
        <button className="not-selected">Experiences</button>
      </div>
      <div className="nav-top-right">
        <span>Airbnb your home</span>
        <button className="world-btn">
          <TbWorld className="world-icon" />
        </button>
        <button
          className="side-menu-btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          style={{ boxShadow: showMenu ? "0 3px 7px -2px #b1b1b1" : "" }}
        >
          <HiBars3 className="bars-icon" />
          <FaUserCircle className="user-icon" />
          {showMenu && <Menu />}
        </button>
      </div>
    </div>
  );
};

export default Navtop;

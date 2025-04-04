import { SiAirbnb } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";
import { useGlobalContext } from "../../Context";

const Navtop = ({ showMenu, setShowMenu }) => {
  const { navMidTab, setNavMidTab } = useGlobalContext();

  return (
    <div className="nav-top">
      <div className="logo-container">
        <a href="https://www.airbnb.co.in/" className="airbnb-icon">
          <SiAirbnb />
        </a>
        <span className="logo-name">airbnb</span>
      </div>
      <div className="tabs-container tabs-container2">
        <button
          className={navMidTab === "stays" ? "" : "not-selected"}
          onClick={() => setNavMidTab("stays")}
        >
          Stays
        </button>
        <button
          className={navMidTab === "experiences" ? "" : "not-selected"}
          onClick={() => setNavMidTab("experiences")}
        >
          Experiences
        </button>
      </div>
      <div className="nav-top-right">
        <span style={{fontWeight: "500", letterSpacing: "-.5px"}}>Airbnb your home</span>
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

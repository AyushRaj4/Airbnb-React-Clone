import { FaMagnifyingGlass } from "react-icons/fa6";
import Regions from "./Regions";
import Calendar from "./Calendar";
import Guests from "./Guests";

const Navmid = ({ modalNum, setModalNum, navMidTab, setNavMidTab }) => {
  const showCalendar = (num) => {
    num === 2 ? setModalNum(2) : setModalNum(3);
  };

  return (
    <>
      <div className="tabs-container">
        <button
          className={navMidTab === "stays" ? "" : "not-selected"}
          onClick={(e) => setNavMidTab("stays")}
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
      <article
        className={
          navMidTab === "stays"
            ? "nav-main-menu"
            : "nav-main-menu nav-main-menu-mod"
        }
        style={{ background: modalNum != -1 && "#d6d6d680" }}
      >
        <div
          className="menu-btn"
          style={{ paddingLeft: "2rem", background: modalNum === 1 && "white" }}
          onClick={(e) => {
            e.stopPropagation();
            setModalNum(1);
          }}
        >
          <span>Where</span>
          <span style={{ color: modalNum !== 1 && modalNum !== -1 && "black" }}>
            Search destinations
          </span>
          {modalNum === 1 && <Regions />}
        </div>
        <span></span>
        {navMidTab === "stays" ? (
          <>
            <div
              className="menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                showCalendar(2);
              }}
              style={{ background: modalNum === 2 && "white" }}
            >
              <span>Check in</span>
              <span
                style={{ color: modalNum !== 2 && modalNum !== -1 && "black" }}
              >
                Add dates
              </span>
            </div>
            <span></span>
            <div
              className="menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                showCalendar(3);
              }}
              style={{ background: modalNum === 3 && "white" }}
            >
              <span>Check out</span>
              <span
                style={{ color: modalNum !== 3 && modalNum !== -1 && "black" }}
              >
                Add dates
              </span>
            </div>
          </>
        ) : (
          <div
            className="menu-btn"
            onClick={(e) => {
              e.stopPropagation();
              showCalendar(2);
            }}
            style={{ background: modalNum === 2 && "white" }}
          >
            <span>Dates</span>
            <span
              style={{ color: modalNum !== 2 && modalNum !== -1 && "black" }}
            >
              Add dates
            </span>
          </div>
        )}
        <span></span>
        <div
          className="menu-btn menu-btn-last"
          onClick={(e) => {
            e.stopPropagation();
            setModalNum(4);
          }}
          style={{ background: modalNum === 4 && "white" }}
        >
          <span className="where">
            <span>Who</span>
            <span
              style={{ color: modalNum !== -1 && modalNum !== 4 && "black" }}
            >
              Add guests
            </span>
            {modalNum === 4 && <Guests />}
          </span>
          <button className="search-btn">
            <FaMagnifyingGlass className="search-glass" />
          </button>
        </div>
        {(modalNum === 2 || modalNum === 3) && <Calendar />}
      </article>
    </>
  );
};

export default Navmid;

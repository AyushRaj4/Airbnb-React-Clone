import styled from "styled-components";
import SearchBar from "./Searchbar";
import PageIcons from "./PageIcons";
import { useGlobalContext } from "../../Context";
import "./Navbar.css";
import Navtop from "./Navtop";
import Navmid from "./Navmid";
import { useRef, useState } from "react";
import Calendar from "./Calendar";

const Wrapper = styled.nav`
  /* background: white; */
  position: fixed;
  top: 0;
  /* box-shadow: var(--shadow-1); */
  box-shadow: 0 0 4.5px 1px #d6d6d6;
  z-index: 1;
  width: 100vw;

  .next-btn,
  .prev-btn,
  .modify-btn {
    display: none;
  }

  .nav-center {
    width: 93vw;
    margin: 0 auto;
  }

  .nav-center2 {
    display: none;
  }

  .nav-top {
    display: none;
  }

  .input-section {
    letter-spacing: 0.02rem;
    cursor: pointer;
    border-radius: 10rem;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 4px 10px #ededed;
    padding: 0.7rem 1rem;
    margin: 0.9rem 0;
    margin-bottom: 0.57rem;
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    overflow: hidden;
  }

  .mag-glass {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 280px) {
    .mag-glass {
      display: none;
    }

    .click-input {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 255px) {
    .click-input {
      margin-left: 0;
    }
  }

  .where-to {
    font-size: 0.9rem;
  }

  .below-where-to {
    column-gap: 0.3rem;
  }

  .below-where-to span {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .where-to + div span {
    font-size: 0.75rem;
    color: gray;
  }

  .where-to + div {
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
  }

  .gray-dot {
    width: 2.9px;
    height: 2.9px;
    background-color: gray;
    border-radius: 10rem;
  }

  .page-icons-container {
    width: 100%;
    display: flex;
    overflow-x: auto;
    column-gap: 2.7rem;
    padding: 0.5rem 1.5rem 0 1.5rem;
  }

  .page-icons-container::-webkit-scrollbar {
    display: none;
  }

  .page-icons-container div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.65rem;
    padding-bottom: 0.8rem;
    border-bottom: 2.5px solid transparent;
    cursor: pointer;
  }

  .page-icons-container div span {
    color: #525252;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .page-icons-container div:hover {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom: 2.5px solid #afafaf85;
  }

  .page-icons-container div:hover .page-icon,
  .page-icons-container div:hover span,
  .active div .page-icon,
  .active div span {
    color: black;
  }

  .page-icon {
    font-size: 1.6rem;
    color: #525252;
  }

  .active div {
    border-bottom: 3px solid black;
  }

  .active:hover div {
    border-bottom: 3px solid black;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  @media screen and (min-width: 743px) {
    padding: 1rem 0;
    padding-bottom: 0;
    box-shadow: none;

    .input-section {
      display: none;
    }

    .nav-center {
      width: 89.5vw;
      margin-bottom: 0.9rem;
    }

    .nav-top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }

    .nav-top-right {
      display: flex;
      align-items: center;
    }

    .nav-top-right span {
      white-space: nowrap;
      font-size: 0.9rem;
      padding: 0.7rem 0.9rem;
      border-radius: 10rem;
      cursor: pointer;
    }

    .world-btn {
      border: none;
      background: transparent;
      padding: 0.7rem;
      border-radius: 10rem;
      margin-right: 0.4rem;
    }

    .nav-top-right span:hover,
    .world-btn:hover {
      background: #eeeeee9e;
    }

    .logo-container {
      display: flex;
      align-items: center;
      column-gap: 0.3rem;
    }

    .airbnb-icon,
    .user-icon {
      font-size: 2rem;
    }

    .world-icon,
    .bars-icon {
      font-size: 1.2rem;
    }

    .world-icon {
      color: #393939;
    }

    .airbnb-icon {
      color: #ff0044;
    }

    .airbnb-icon + span {
      display: none;
      font-size: 1.3rem;
      font-weight: 600;
      font-family: Poppins;
      color: #ff0044;
    }

    .user-icon {
      color: #707070;
    }

    .side-menu-btn {
      position: relative;
      background: white;
      display: flex;
      column-gap: 0.7rem;
      border: 1px solid #d8d8d8;
      border-radius: 10rem;
      padding: 0.5rem 0.7rem;
      transition: box-shadow 0.18s;
    }

    .side-menu-btn:hover {
      box-shadow: 0 3px 7px -2px #b1b1b1;
    }

    .nav-center2 {
      width: 89.5vw;
      margin: 0 auto;
      display: flex;
      row-gap: 1rem;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .tabs-container {
      display: flex;
    }

    .tabs-container2 {
      display: none;
      position: relative;
      left: 5.3rem;
    }

    .tabs-container button {
      border: transparent;
      background: transparent;
      font-size: 1rem;
      padding: 0.6rem 1rem;
      border-radius: 10rem;
    }

    .not-selected {
      color: gray;
    }

    .not-selected:hover {
      background: #eeeeee6d;
      color: #2a2a2a;
    }

    .nav-main-menu {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr auto 1fr auto 1fr auto 2fr;
      border-radius: 10rem;
      border: 1px solid #e4e4e4;
      box-shadow: 0 3px 8px -1px #d6d6d6;
      position: relative;
    }

    .nav-main-menu-mod {
      grid-template-columns: 1fr auto 1fr auto 1fr;
    }

    .menu-btn {
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      border-radius: 10rem;
      padding: 0.5rem 0 0.5rem 1.4rem;
      font-size: 1rem;
      row-gap: 0.3rem;
      cursor: pointer;
      position: relative;
    }

    .menu-btn:hover {
      background: #d6d6d680;
    }

    .menu-btn span {
      font-size: 0.74rem;
      font-weight: 500;
      color: #2a2a2a;
    }

    .menu-btn span + span {
      font-size: 0.9rem;
      font-weight: 400;
      color: #666666;
    }

    .menu-btn-last {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-right: 0.7rem;
    }

    .where {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 0.3rem;
    }

    .search-btn {
      padding: 1rem;
      background: #ff325b;
      border-radius: 10rem;
      transition: background-color 0.2s;
    }

    .search-btn:hover {
      background-color: #ff0064;
    }

    .search-glass {
      color: white;
      font-size: 1rem;
    }

    .nav-main-menu > span {
      width: 0;
      height: 2rem;
      border-right: 1px solid #dfdfdf;
      margin: auto;
    }

    .nav-bottom-container {
      padding: 1.5rem 2.5rem 0 2.5rem;
      border-top: 1px solid #e8e8e8;
      display: flex;
      align-items: flex-start;
      column-gap: 1rem;
    }

    .page-icons-article {
      width: 100%;
      overflow: auto;
      position: relative;
    }

    .page-icons-container {
      padding: 0;
    }

    .prev-btn,
    .next-btn {
      display: flex;
      position: absolute;
      top: 0.43rem;
      padding: 0.5rem;
      border-radius: 10rem;
      background: #ffffff;
      border: 1px solid #878787;
      transition: all 0.25s;
    }

    .prev-btn:hover,
    .next-btn:hover {
      transform: scale(1.03);
      box-shadow: 0px 0px 5px -1px #999999;
    }

    .prev-btn {
      left: 2px;
    }

    .next-btn {
      right: 2px;
    }

    .hide-btn {
      border: 1px solid transparent;
      background: transparent;
      pointer-events: none;
    }

    .hide-icon {
      color: transparent;
    }

    .angle-icon {
      font-size: 1rem;
      transition: all 0.25s;
    }

    .modify-btn {
      height: 2.95rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      font-size: 0.7rem;
      border: 1px solid #cccccc;
      border-radius: 0.7rem;
      cursor: pointer;
      transition: border 0.2s;
      white-space: nowrap;
      font-weight: 500;
    }

    .modify-btn:hover {
      border: 1px solid black;
      background: #f2f2f2;
    }

    .adjustment-icon {
      font-size: 1.2rem;
    }

    .total-btn {
      width: 2.5rem;
      height: 1.6rem;
      background: #c5c5c5;
      border-radius: 10rem;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0.1rem;
    }

    .total-btn:hover {
      background: black;
    }

    .total-btn span {
      height: 1.4rem;
      width: 1.4rem;
      background: white;
      border-radius: 10rem;
      transition: all 0.2s;
    }

    .show-btn {
      transition: var(--transition);
      /* padding-left: 1.29rem; */
      background: black;
    }

    .show-btn span {
      transform: translateX(0.9rem);
    }
  }

  @media screen and (min-width: 950px) {
    .tabs-container {
      display: none;
    }

    .tabs-container2 {
      display: flex;
    }

    .nav-main-menu {
      width: 85%;
    }
  }

  @media screen and (min-width: 1200px) {
    .nav-main-menu {
      width: 70%;
    }

    .airbnb-icon + span {
      display: inline-block;
    }
  }

  @media screen and (min-width: 1400px) {
    .nav-main-menu {
      width: 62%;
    }

    .nav-bottom-container {
      padding: 1.5rem 5rem 0 5rem;
    }
  }
`;

const Navbar = () => {
  const { isModalOpen2, isAtTop, navMidTab, setNavMidTab } = useGlobalContext();
  const pageIconsRef = useRef(null);
  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);
  const { modalNum, setModalNum } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);

  const scrollRight = () => {
    // console.log(pageIconsRef.current);
    pageIconsRef.current.scrollBy({ left: 235, behavior: "smooth" });
  };

  const scrollLeft = () => {
    // console.log(pageIconsRef.current);
    pageIconsRef.current.scrollBy({ left: -235, behavior: "smooth" });
  };

  const checkPageIconsPosition = () => {
    const isLeftmost = pageIconsRef.current.scrollLeft === 0;

    const isRightmost =
      pageIconsRef.current.scrollLeft + pageIconsRef.current.clientWidth >=
      pageIconsRef.current.scrollWidth - 1;
    // console.log(isLeftmost);
    // console.log(isRightmost);

    if (isLeftmost) {
      setIsAtLeft(true);
      setIsAtRight(false);
    } else if (isRightmost) {
      setIsAtLeft(false);
      setIsAtRight(true);
    } else {
      setIsAtLeft(false);
      setIsAtRight(false);
    }
  };

  return (
    <Wrapper
      className={isModalOpen2 ? "navbar navbar-dark" : "navbar"}
      style={{ boxShadow: isAtTop ? "" : "0 0 4.5px 1px #d6d6d6" }}
      onClick={() => {
        if (modalNum !== -1) setModalNum(-1);
        if (showMenu) setShowMenu(false);
      }}
    >
      <div className="nav-center">
        <SearchBar />
        <Navtop showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className="nav-center2">
        <Navmid
          modalNum={modalNum}
          setModalNum={setModalNum}
          navMidTab={navMidTab}
          setNavMidTab={setNavMidTab}
        />
      </div>
      <PageIcons
        pageIconsRef={pageIconsRef}
        scrollRight={scrollRight}
        scrollLeft={scrollLeft}
        isAtLeft={isAtLeft}
        isAtRight={isAtRight}
        checkPageIconsPosition={checkPageIconsPosition}
      />
    </Wrapper>
  );
};

export default Navbar;

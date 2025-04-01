import { NavLink, useLocation } from "react-router-dom";
import { pageIcons } from "../../navData";
import SingleIcon from "./SingleIcon";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useGlobalContext } from "../../Context";

const PageIcons = ({
  pageIconsRef,
  scrollRight,
  scrollLeft,
  isAtLeft,
  isAtRight,
  checkPageIconsPosition,
  openModal,
}) => {
  const { goToPage, showTotal, handleShowTotal } = useGlobalContext();
  const location = useLocation().pathname;

  return (
    <section className="nav-bottom-container">
      <article className="page-icons-article">
        <div
          ref={pageIconsRef}
          className="page-icons-container"
          onScroll={checkPageIconsPosition}
        >
          {pageIcons?.map(({ id, title, icon }, index) => {
            const path = index ? title.toLowerCase() : "/";
            return (
              <NavLink
                to={path}
                key={id}
                onClick={path === "/" ? null : () => goToPage(id, title, index)}
              >
                <SingleIcon key={id} icon={icon} title={title} />
              </NavLink>
            );
          })}
        </div>
        <button
          className={isAtLeft ? "prev-btn hide-btn" : "prev-btn"}
          onClick={scrollLeft}
        >
          <FaAngleLeft
            className={isAtLeft ? "angle-icon hide-icon" : "angle-icon"}
          />
        </button>
        <button
          className={isAtRight ? "next-btn hide-btn" : "next-btn"}
          onClick={scrollRight}
        >
          <FaAngleRight
            className={isAtRight ? "angle-icon hide-icon" : "angle-icon"}
          />
        </button>
      </article>
      <div
        className="modify-btn"
        style={{ display: location === "/" ? "none" : "" }}
        onClick={() => {
          openModal(4);
        }}
      >
        <TbAdjustmentsHorizontal className="adjustment-icon" /> Filters
      </div>
      <div
        className="modify-btn"
        style={{ display: location === "/" ? "none" : "" }}
        onClick={handleShowTotal}
      >
        Display total before taxes
        <button className={showTotal ? "total-btn show-btn" : "total-btn"}>
          <span></span>
        </button>
      </div>
    </section>
  );
};

export default PageIcons;

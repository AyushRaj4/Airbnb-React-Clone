import RecentSearches from "./RecentSearches";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import SuggestedDestinations from "./SuggestedDestinations";
import { useGlobalContext } from "../../Context";

const Destinations = ({ currentTab }) => {
  const {
    modalTab,
    setModalTab,
    isDestinationsOpen,
    openDestinations,
    closeDestinations,
    modalRef,
    handleScroll,
    isAtTop,
  } = useGlobalContext();
  const showDestinations = () => {
    setModalTab(1);
  };

  if (modalTab !== 1)
    return (
      <div className="click-to-expand" onClick={showDestinations}>
        <span className="sp1">Where</span>
        <span>I am flexible</span>
      </div>
    );

  return (
    <div
      ref={modalRef}
      className={isDestinationsOpen ? "destinations open-dest" : "destinations"}
      onScroll={handleScroll}
    >
      <h2 style={{ display: isDestinationsOpen ? "none" : "" }}>Where to?</h2>
      <div
        className={`${
          isDestinationsOpen
            ? "search-container search-container-mod"
            : "search-container"
        } ${isAtTop ? "search-container" : "search-container apply-shadow"}`}
      >
        <input
          type="text"
          placeholder="Search destinations"
          style={{marginBottom: isAtTop ? "0.6rem" : "1.4rem"}}
          className={
            isDestinationsOpen
              ? "search-destination search2"
              : "search-destination"
          }
        />
        <span className="back-btn-span">
          {isDestinationsOpen ? (
            <button
              className="back-btn search-icon left-arrow"
              onClick={closeDestinations}
            >
              <FaArrowLeft className="left-arrow" />
            </button>
          ) : (
            <IoMdSearch className="search-icon" />
          )}
        </span>
      </div>
      {currentTab?.recentSearches?.length === 0 ? null : (
        <div className="recent-searches">
          <span>Recent searches</span>
          {currentTab?.recentSearches?.map((item) => {
            return (
              <RecentSearches
                key={item.id}
                city={item.city}
                desc={item.description}
                img={item.img}
              />
            );
          })}
        </div>
      )}
      <div className="suggested-destinations">
        <span>Suggested destinations</span>
        {currentTab?.suggestedDestinations?.map((item, index) => {
          const { id, city, state, description, img } = item;
          return (
            <SuggestedDestinations
              key={id}
              city={city}
              state={state}
              desc={description}
              img={img}
              index={index}
              len={currentTab?.suggestedDestinations?.length}
            />
          );
        })}
        <div className="create-space">fcxhgfch</div>
      </div>
      <div
        className="more-arrow"
        style={{ display: isDestinationsOpen ? "none" : "" }}
        onClick={openDestinations}
      >
        <IoIosArrowDown
          style={{
            marginTop: "0.5rem",
            color: "#767676",
          }}
        />
      </div>
    </div>
  );
};

export default Destinations;

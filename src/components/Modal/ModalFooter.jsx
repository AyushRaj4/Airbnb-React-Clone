import { IoMdSearch } from "react-icons/io";
import { useGlobalContext } from "../../Context";

const ModalFooter = () => {
  const { modalTab, resetTravellerList, isDestinationsOpen } = useGlobalContext();
  return (
    <footer className="footer" style={{ display: modalTab !== 2 && !isDestinationsOpen ? "flex" : "none" }}>
      <button className="clear-btn" onClick={resetTravellerList}>
        Clear all
      </button>
      <button>
        <IoMdSearch className="search" /> Search
      </button>
    </footer>
  );
};

export default ModalFooter;

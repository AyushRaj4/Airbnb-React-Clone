import { useGlobalContext } from "../../Context";
import Tabs from "./Tabs";
import { RxCross2 } from "react-icons/rx";

const ModalTop = ({ tabs }) => {
  const {
    closeModal,
    changeTab,
    isDestinationsOpen,
  } = useGlobalContext();

  return (
    <div className="stay-exp">
      <button
        className="cross-btn"
        style={{ display: isDestinationsOpen ? "none" : "" }}
        onClick={() => closeModal(1)}
      >
        <RxCross2 className="cross" />
      </button>
      <Tabs tabs={tabs} changeTab={changeTab} />
    </div>
  );
};

export default ModalTop;

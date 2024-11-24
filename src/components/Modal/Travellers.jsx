import { useGlobalContext } from "../../Context";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Travellers = () => {
  const { modalTab, setModalTab } = useGlobalContext();
  const { travellers, setTravellers } = useGlobalContext();

  const increaseCount = (index) => {
    const newItem = [...travellers];
    if (newItem[index].amount >= 16) return;
    newItem[index].amount += 1;
    setTravellers(newItem);
  };

  const decreaseCount = (index) => {
    const newItem = [...travellers];
    if (newItem[index].amount === 0) return;
    newItem[index].amount -= 1;
    setTravellers(newItem);
  };

  const showTravellers = () => {
    setModalTab(3);
  };

  if (modalTab !== 3)
    return (
      <div
        className="click-to-expand"
        style={{ display: modalTab === 2 ? "none" : "flex" }}
        onClick={showTravellers}
      >
        <span className="sp1">Who</span>
        <span>Add guests</span>
      </div>
    );

  return (
    <div className="travellers">
      <h2>Who's coming?</h2>
      {travellers?.map((item, index) => {
        const { personType, ageGroup, amount, id } = item;
        return (
          <div
            key={id}
            className="traveller"
            style={
              index === travellers.length - 1
                ? { paddingBottom: "0", borderBottom: "none" }
                : null
            }
          >
            <div className="details">
              <span>{personType}</span> <span>{ageGroup}</span>
            </div>
            <div className="count-guests">
              <button
                className={amount <= 0 ? "count-btn stop-count" : "count-btn"}
                onClick={() => decreaseCount(index)}
              >
                <FaMinus className="minus" />
              </button>
              <span>
                {amount}
                {amount >= 16 && "+"}
              </span>
              <button
                className={amount >= 16 ? "count-btn stop-count" : "count-btn"}
                onClick={(e) => {
                  increaseCount(index, e);
                }}
              >
                <FaPlus className="plus" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Travellers;

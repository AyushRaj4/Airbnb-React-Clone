import { useGlobalContext } from "../../Context";

const TripDate = () => {
  const { modalTab, setModalTab } = useGlobalContext();

  const showTripDate = () => {
    setModalTab(2);
  };

  if (modalTab !== 2)
    return (
      <div className="click-to-expand" onClick={showTripDate}>
        <span className="sp1">When</span>
        <span>Add dates</span>
      </div>
    );

  return <div className="trip-date"><h1>Set Time and Date</h1></div>
};

export default TripDate;

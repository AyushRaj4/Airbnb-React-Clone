import { useGlobalContext } from "../../Context";

const Tabs = ({ tabs, changeTab }) => {
  const { currentTab } = useGlobalContext();

  return (
    <>
      {tabs.map(({ name, id }, index) => (
        <button
          key={id}
          className="tab-btn"
          onClick={() => changeTab(index)}
          style={{
            borderBottom:
              id === currentTab.id
                ? "2px solid black"
                : "2px solid transparent",
            color: id === currentTab.id ? "black" : "#6a6a6a",
          }}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default Tabs;

import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Wrapper = styled.article`
  position: absolute;
  top: 4.8rem;
  right: 0;
  z-index: 1;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0px 0.2rem 2rem #c6c6c6;
  padding: 0.7rem 2.5rem;
  display: flex;
  flex-direction: column;
  /* row-gap: 2rem; */

  .traveller {
    display: flex;
    justify-content: space-between;
    column-gap: 1.5rem;
    padding: 1.6rem 0;
    border-bottom: 1px solid #ebebeb;
  }

  .details {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .traveller .details span {
    font-size: 1rem;
  }

  .details span + span {
    color: #6a6a6a;
    font-size: 0.91rem;
  }

  .count-guests {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .traveller .count-guests span {
    font-size: 1rem;
  }

  .plus,
  .minus {
    color: gray;
  }

  .count-btn {
    display: flex;
    background: transparent;
    border: 1px solid #b6b6b6;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    cursor: pointer;
  }

  .count-btn:hover {
    border: 1px solid black;
  }

  .count-btn:hover .plus,
  .count-btn:hover .minus {
    color: #343434;
  }

  .stop-count {
    border: 1px solid #e8e8e8;
    cursor: not-allowed;
  }

  .stop-count:hover {
    border: 1px solid #e8e8e8;
  }

  .stop-count .minus,
  .stop-count .plus {
    color: #e8e8e8;
  }

  .stop-count:hover .minus,
  .stop-count:hover .plus {
    color: #e8e8e8;
  }

  .count-btn + span {
    /*  simply, text-align: center; will not work because the + sign appears after amount >= 16 */
    width: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Guests = () => {
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

  return (
    <Wrapper className="travellers">
      {travellers?.map((item, index) => {
        const { personType, ageGroup, amount, id } = item;
        return (
          <div
            key={id}
            className="traveller"
            style={
              index === travellers.length - 1 ? { borderBottom: "none" } : null
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
    </Wrapper>
  );
};

export default Guests;

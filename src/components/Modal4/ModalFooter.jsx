import styled from "styled-components";
import { useGlobalContext } from "../../Context";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom-left-radius: 1.8rem;
  border-bottom-right-radius: 1.8rem;
  border: 1px solid #dddddd;
  box-shadow: 0px -5px 15px -5px #c8c8c8;

  .clear-btn {
    font-size: 0.98rem;
    font-weight: 500;
    background: transparent;
    padding: 0.5rem 0.5rem;
    border-radius: 0.6rem;
  }

  .clear-btn:hover {
    background: #f7f7f7;
  }

  .show-btn {
    font-size: 0.98rem;
    font-weight: 500;
    background: #1e1e1e;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
  }

  .show-btn:hover {
    background: #000;
  }
`;

const ModalFooter = () => {
  const { state2 } = useGlobalContext();

  return (
    <Wrapper>
      <button className="clear-btn">Clear all</button>
      <button className="show-btn">
        Show {state2.totalPlacesFound} places
      </button>
    </Wrapper>
  );
};

export default ModalFooter;

import styled from "styled-components";

const Wrapper = styled.article`
  position: absolute;
  top: 4.8rem;
  background: white;
  width: 100%;
  height: 60vh;
  z-index: 1;
  border-radius: 2rem;
  box-shadow: 0 2px 10px -1px #e0e0e0;
`;

const Calendar = () => {
  return <Wrapper></Wrapper>;
};

export default Calendar;

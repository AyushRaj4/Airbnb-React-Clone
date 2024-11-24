import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../Context";

const Wrapper = styled.section`
  padding: 2.4rem 1.5rem;

  h1 {
    margin-bottom: 2.65rem;
    font-size: 2.1rem;
  }

  h3 {
    font-weight: 530;
    font-size: 1.4rem;
  }

  h4 {
    font-size: .9rem;
    margin-top: 12px;
    margin-bottom: 1.7rem;
    color: gray;
  }

  button {
    padding: .92rem 1.4rem;
    border-radius: 0.54rem;
    border: none;
    background: var(--btn-color-1);
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const index = () => {
  const {setIsEmail} = useGlobalContext();

  return (
    <Wrapper>
      <h1>Wishlists</h1>
      <h3>Log in to view your wishlists</h3>
      <h4>You can create, view, or edit wishlists once you’ve logged in</h4>
      <NavLink to="/login">
        <button onClick={() => setIsEmail(false)}>Log in</button>
      </NavLink>
    </Wrapper>
  );
};

export default index;

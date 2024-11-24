import { Form } from "../../components";
import styled from "styled-components";

const Wrapper = styled.section`
  header {
    padding: 1.7rem 0 1rem 0;
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid #e2e2e2;
  }
`;

const index = () => {
  return (
    <Wrapper>
      <header>Log in or sign up</header>
      <Form />
    </Wrapper>
  );
};

export default index;

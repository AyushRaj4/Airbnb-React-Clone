import styled from "styled-components";
import { indexPageData } from "../../mainData";
import { useGlobalContext } from "../../Context";
import { Homes, Modal2, Modal3 } from "../../components";
import { useEffect } from "react";

const Wrapper = styled.main`
  margin-top: 175px;
  margin-bottom: 7rem;
  padding: 0 1.5rem;

  @media screen and (min-width: 743px) {
    padding: 0 2.5rem;
    margin-top: 345px;
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 950px) {
    margin-top: 279px;
  }

  @media screen and (min-width: 1400px) {
    padding: 0 5rem;
  }
`;

const IndexPage = () => {
  const { isModalOpen, setIsAtTop } = useGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper style={{ display: isModalOpen ? "none" : "" }}>
      <Homes state={indexPageData} indexPage={true} />
      <Modal2 />
      <Modal3 />
    </Wrapper>
  );
};

export default IndexPage;

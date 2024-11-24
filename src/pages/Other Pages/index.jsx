import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Homes, Modal2 } from "../../components";

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

const OtherPages = () => {
  const { state, goToPage, isModalOpen, setIsAtTop, handleScroll } =
    useGlobalContext();

  const location = useLocation();
  const name = location.pathname.substring(1).replace("%20", " ");
  // console.log(name);

  useEffect(() => {
    goToPage("null", name, -1);
  }, []);

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
    <Wrapper
      style={{ display: isModalOpen ? "none" : "" }}
      onScroll={() => {
        console.log(22);
        handleScroll();
      }}
    >
      <section className="homes-container">
        <Homes state={state} indexPage={false} />
      </section>
      <Modal2 />
    </Wrapper>
  );
};

export default OtherPages;

import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import "./Modal4.css";
import { IoCloseOutline } from "react-icons/io5";
import Filters from "../Filters";
import ModalFooter from "./ModalFooter";

const Wrapper = styled.main`
  header {
    display: flex;
    justify-content: center;
    font-weight: 600;
    padding: 1.5rem 0rem;
    border-bottom: 1px #dddddd solid;
  }

  .close-btn {
    position: absolute;
    left: 0.7rem;
    top: 0.8rem;
    background: transparent;
    border-radius: 10rem;
    padding: 0.4rem;
  }

  .close-btn:hover {
    background: #f7f7f7;
  }
`;

const Modal4 = () => {
  const { isModalOpen4, closeModal } = useGlobalContext();
  if (isModalOpen4) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <Wrapper
      className={
        isModalOpen4 ? "modal-container4 show-modal4" : "modal-container4"
      }
      onClick={() => closeModal(4)}
    >
      <section
        className={
          isModalOpen4 ? "modal4-section show-modal4-section" : "modal4-section"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <header className="header">
          <button
            className="close-btn"
            onClick={() => {
              closeModal(4);
            }}
          >
            <IoCloseOutline className="close" />
          </button>
          Filters
        </header>
        <Filters />
        <ModalFooter />
      </section>
    </Wrapper>
  );
};

export default Modal4;

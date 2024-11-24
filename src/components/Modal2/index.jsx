import styled from "styled-components";
import "./Modal2.css";
import { useGlobalContext } from "../../Context";
import { Form } from "../";
import { IoCloseOutline } from "react-icons/io5";

const Wrapper = styled.main`
  form {
    padding: 0 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.8rem;
  }

  .other-sign-ins {
    margin-bottom: 0;
  }

  .modal2-section::-webkit-scrollbar {
    display: none;
  }

  header {
    padding: 1.15rem 0 1.15rem 0;
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid #e2e2e2;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    position: sticky;
    top: 0px;
    z-index: 101;
    background-color: white;
  }

  .close-btn {
    position: absolute;
    left: 0.8rem;
    top: 18%;
    background: transparent;
    border-radius: 10rem;
    padding: 0.4rem;
  }

  .close-btn:hover {
    background: #f4f4f4;
  }

  .close {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .help-btn {
    margin-bottom: 0rem;
  }
`;

const Modal2 = () => {
  const { isModalOpen2, closeModal, setIsEmail } = useGlobalContext();
  if (isModalOpen2) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <Wrapper
      className={
        isModalOpen2 ? "modal-container2 show-modal2" : " modal-container2"
      }
    >
      <section
        className={
          isModalOpen2 ? "modal2-section show-modal2-section" : "modal2-section"
        }
      >
        <header className="header">
          <button
            className="close-btn"
            onClick={() => {
              closeModal(2);
              document.body.classList.toggle("shadowed");
            }}
          >
            <IoCloseOutline className="close" />
          </button>
          Log in or sign up
        </header>
        <Form removeHelp={true} />
      </section>
    </Wrapper>
  );
};

export default Modal2;

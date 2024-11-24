import styled from "styled-components";
import { useGlobalContext } from "../../Context";
import { IoCloseOutline } from "react-icons/io5";
import "./Modal3.css";
import { nanoid } from "nanoid";
import { IoCopy } from "react-icons/io5";
import {
  FaSquareWhatsapp,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSignalMessenger,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiLogoMessenger } from "react-icons/bi";
import { TfiMore } from "react-icons/tfi";

const Wrapper = styled.main`
  .close-btn {
    top: 0.8rem;
  }

  h2 {
    font-weight: 600;
    font-size: 1.8rem;
    margin-top: 2.5rem;
  }

  .home-details {
    display: flex;
    align-items: center;
  }

  img {
    width: 4rem;
    aspect-ratio: 1;
    border-radius: 0.5rem;
    margin-right: 1rem;
    object-fit: cover;
  }

  .share-btn-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .share-btn-container button {
    background: transparent;
    border: 1px solid #d6d6d6;
    border-radius: 0.7rem;
    padding: 0.8rem 1.1rem;
    font-size: 1rem;
    font-weight: 500;
    justify-content: flex-start;
  }

  .share-btn-container button:hover {
    background: #f7f7f7;
  }

  .share-icon {
    color: #1a1a1a;
    margin-right: 1rem;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    .share-btn-container button {
      font-size: 0.71rem;
    }

    .share-icon {
      font-size: 1.1rem;
      margin-right: 0.5rem;
    }
  }
`;

const sharingOptions = [
  { name: "Copy image", icon: <IoCopy className="share-icon" />, id: nanoid() },
  { name: "Email", icon: <MdEmail className="share-icon" />, id: nanoid() },
  {
    name: "Messages",
    icon: <FaSignalMessenger className="share-icon" />,
    id: nanoid(),
  },
  {
    name: "Whatsapp",
    icon: <FaSquareWhatsapp className="share-icon" />,
    id: nanoid(),
  },
  {
    name: "Messenger",
    icon: <BiLogoMessenger className="share-icon" />,
    id: nanoid(),
  },
  {
    name: "Facebook",
    icon: <FaSquareFacebook className="share-icon" />,
    id: nanoid(),
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter className="share-icon" />,
    id: nanoid(),
  },
  {
    name: "More options",
    icon: <TfiMore className="share-icon" />,
    id: nanoid(),
  },
];

const Modal3 = () => {
  const { isModalOpen3, closeModal, modal3Details } = useGlobalContext();
  if (isModalOpen3) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  return (
    <Wrapper
      className={
        isModalOpen3 ? "modal-container3 show-modal3" : "modal-container3"
      }
    >
      <section
        className={
          isModalOpen3 ? "modal3-section show-modal3-section" : "modal3-section"
        }
      >
        <button
          className="close-btn"
          onClick={(e) => {
            e.stopPropagation();
            closeModal(3);
          }}
        >
          <IoCloseOutline className="close" />
        </button>
        <h2>Share Experience</h2>
        <div className="home-details">
          <img src={modal3Details?.image?.img} alt="" />
          <span>{modal3Details?.name}</span>
        </div>
        <div className="share-btn-container">
          {sharingOptions.map(({ name, icon, id }) => {
            return (
              <button key={id}>
                {icon} {name}
              </button>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Modal3;

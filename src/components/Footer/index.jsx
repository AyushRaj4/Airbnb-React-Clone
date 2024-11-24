import styled from "styled-components";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { nanoid } from "nanoid";
import { NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../Context";

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  border-top: 1px solid #eaeaea;
  padding: 0.7rem 0;
  background: white;
  z-index: 1;

  @media screen and (min-width: 743px) {
    display: none;
  }

  .footer-pages {
    margin: 0 auto;
    width: 73vw;
    display: flex;
    justify-content: space-evenly;
  }

  .footer-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: #606060;
  }

  .footer-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #7e7e7e;
  }

  .footer-pages span {
    font-size: 0.65rem;
    text-transform: capitalize;
  }

  .active .footer-icon,
  .active span {
    color: var(--btn-color-1);
  }
`;

const Footer = () => {
  const { isModalOpen, setIsEmail } = useGlobalContext();

  const footerPages = [
    {
      name: "explore",
      icon: <GoSearch className="footer-icon" />,
      id: nanoid(),
      path: "/",
    },
    {
      name: "wishlists",
      icon: <IoIosHeartEmpty className="footer-icon" />,
      id: nanoid(),
      path: "wishlists",
    },
    {
      name: "login",
      icon: <FaUserCircle className="footer-icon" />,
      id: nanoid(),
      path: "login",
    },
  ];

  const location = useLocation();

  return (
    <Wrapper style={{ display: isModalOpen ? "none" : "" }}>
      <div className="footer-pages">
        {footerPages.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              className={
                location.pathname.includes(item.path) &&
                location.pathname !== "/wishlists" &&
                location.pathname !== "/login"
                  ? "footer-page active"
                  : "footer-page"
              }
              onClick={item.path === "login" ? () => setIsEmail(false) : null}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Footer;

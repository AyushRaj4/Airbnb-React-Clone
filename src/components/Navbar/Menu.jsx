import styled from "styled-components";

const Wrapper = styled.article`
  position: absolute;
  right: 0;
  top: 3.6rem;
  z-index: 100;
  background: white;
  width: 15.3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 1px #e9e9e9;
  border-radius: 0.75rem;

  .box {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  .box .menu-span {
    width: 100%;
    text-align: left;
    padding: 0.6rem 0.9rem;
    border-radius: 0;
    font-size: 0.9rem;
  }

  .box .menu-span:hover {
    background: #f6f6f6;
  }
`;

const Menu = () => {
  return (
    <Wrapper >
      <div className="box" style={{ borderBottom: "1px solid #b0b0b0" }}>
        <span className="menu-span" style={{ fontWeight: "500" }}>
          Sign up
        </span>
        <span className="menu-span">Login</span>
      </div>
      <div className="box">
        <span className="menu-span">Airbnb your home</span>
        <span className="menu-span">Host an experience</span>
        <span className="menu-span">Help centre</span>
      </div>
    </Wrapper>
  );
};

export default Menu;

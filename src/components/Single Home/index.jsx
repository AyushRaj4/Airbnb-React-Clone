import styled from "styled-components";
import { IoStar } from "react-icons/io5";
// import Slider from "../Slider";
import { Slider } from "../";
import { useGlobalContext } from "../../Context";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 0.35rem;
  cursor: pointer;
  position: relative;
  width: 100%;

  span {
    font-size: 0.95rem;
  }

  .location {
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* margin-top: 57vh; */
  }

  .location span + span {
    display: flex;
    align-items: center;
    column-gap: 0.3rem;
  }

  .star {
    font-size: 0.8rem;
  }

  .desc,
  .dates {
    color: var(--span-color-1);
  }

  .dates {
    margin-bottom: 0.4rem;
  }

  .slider {
    transition: all 1s;
  }

  .slider:hover .slider-nxt-btn,
  .slider:hover .slider-prev-btn {
    background: #f0f0f0c8;
  }

  .slider:hover .slider-icon {
    color: black;
  }

  .slider .slider-nxt-btn:hover,
  .slider .slider-prev-btn:hover {
    background: #f0f0f0;
    transform: scale(1.04);
  }

  @media screen and (min-width: 999.2px) {
    .truncated-text {
      /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
      width: 100%; */
    }
  }

  .bold-span {
    font-weight: 500;
  }
`;

const SingleHome = (props) => {
  const { city, stateOrCountry, desc, dates, price, rating, url } = props;
  const { name, host, images, status, indexPage } = props;
  const { showTotal } = useGlobalContext();

  if (indexPage) {
    return (
      <Wrapper
        className="slider-container"
        onClick={() => {
          window.location.href = url;
        }}
      >
        <Slider {...props} />
        <span className="truncated-text">{name}</span>
        <span className="desc">{host}</span>
        <span className="bold-span">{status}</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      className="slider-container"
      onClick={() => {
        window.location.href = url;
      }}
    >
      <Slider {...props} />
      <div className="location">
        <span className="bold-span">
          {city}, {stateOrCountry}
        </span>
        <span>
          {rating && <IoStar className="star" />} {rating}
        </span>
      </div>
      <span className="desc">{desc}</span>
      <span className="dates">
        {showTotal && "5 nights,"} {dates}
      </span>
      <span className="price">
        <span
          className="bold-span"
          style={{ textDecoration: showTotal ? "underline" : "" }}
        >
          ₹{showTotal ? `${price * 5} total before taxes` : `${price} night`}
        </span>{" "}
      </span>
      {/* <FaRegHeart style={{color:"yellow"}} /> */}
    </Wrapper>
  );
};

export default SingleHome;

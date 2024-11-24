import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import { TiHeart } from "react-icons/ti";
import { useGlobalContext } from "../../Context";
import { LuUpload } from "react-icons/lu";
import Modal3 from "../Modal3";

const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: 5 / 4.5;
  position: relative;
  display: flex;
  overflow: hidden;
  transition: var(--transition);
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;

  .house-img {
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
    margin-bottom: 0.4rem;
    transition: all ease-in-out 0.4s; /* overrided by inline style transition */
    position: absolute;
    top: 0px;
    object-fit: cover;
  }

  .slider-nxt-btn,
  .slider-prev-btn {
    /* display: none; */
    position: absolute;
    top: 48%;
    padding: 0.5rem;
    border-radius: 10rem;
    border: transparent;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s;
  }

  /* required if you have hidden prev and nxt buttons for smaller screens */
  /* @media screen and (min-width: 900px) {
    .slider-nxt-btn,
    .slider-prev-btn {
      display: flex;
    }
  } */

  .slider-icon {
    color: transparent;
    font-size: 0.9rem;
  }

  .slider-nxt-btn {
    right: 0.8rem;
  }

  .slider-prev-btn {
    left: 0.8rem;
  }

  .dots-container {
    display: flex;
    column-gap: 0.3rem;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%);
  }

  .dots-container span {
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 10rem;
    background: #ffffff89;
    transition: var(--transition);
  }

  .dots-container .move-dot {
    background: white;
  }

  .share-btn {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    padding: 0.45rem;
    border: none;
    border-radius: 10rem;
    background: #f7f7f7ca;
    transition: all 0.2s;
  }

  .share-btn:hover {
    transform: scale(1.03);
    background: #f7f7f7;
  }

  .upload {
    font-size: 1.1rem;
  }

  .heart {
    font-size: 2rem;
    position: absolute;
    top: 0.6rem;
    right: 1rem;
    color: #21212195;
    /* border: 2px white solid; */
    border-radius: 10rem;
    transition: all 0.2s;
    /* background: white; */
  }

  .heart:hover {
    transform: scale(1.07);
  }

  .red-heart {
    color: #ff2f58;
  }

  .guest-fav {
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    font-size: .9rem;
    font-weight: 500;
    padding: 0.4rem 0.75rem;
    background: #f7f7f7;
    border-radius: 10rem;
  }
`;

const Slider = ({
  images,
  city,
  isLiked,
  guestFavourite,
  index,
  indexPage,
  name,
  url,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const { openModal, toggleLike, setLikeIndex, showDetails, setIsEmail } =
    useGlobalContext();

  const prevSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImg((currentImg - 1 + images.length) % images.length);
  };

  const nextSlide = (e) => {
    if (e) e.stopPropagation();
    setCurrentImg((currentImg + 1) % images.length);
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      // Swiped right
      prevSlide();
    }
  };

  return (
    <Wrapper
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((item, imgIndex) => {
        return (
          <img
            key={item.id}
            className="house-img"
            src={item.img}
            alt={`${city} homes`}
            style={{
              transform:
                index % 2 === 0
                  ? `translateX(${(imgIndex - currentImg) * 100}%)`
                  : "",
              opacity: imgIndex === currentImg ? 1 : 0,
              visibility: imgIndex === currentImg ? "visible" : "hidden",
            }}
          />
        );
      })}

      {indexPage ? (
        <button
          className="share-btn"
          onClick={(e) => {
            e.stopPropagation();
            showDetails({ image: images[0], name, url });
            openModal(3);
          }}
        >
          <LuUpload className="upload" />
        </button>
      ) : (
        <TiHeart
          className={isLiked ? "heart red-heart" : "heart"}
          onClick={(e) => {
            e.stopPropagation();
            setLikeIndex(index);
            if (!isLiked) {
              openModal(2);
              setIsEmail(false);
            } else toggleLike(index);
          }}
        />
      )}

      {guestFavourite && <span className="guest-fav">Guest favourite</span>}

      <div className="dots-container">
        <span className={currentImg === 0 ? "move-dot" : ""}></span>
        <span className={currentImg === 1 ? "move-dot" : ""}></span>
        <span
          className={
            currentImg > 1 && currentImg < images.length - 2 ? "move-dot" : ""
          }
        ></span>
        <span
          className={currentImg === images.length - 2 ? "move-dot" : ""}
        ></span>
        <span
          className={currentImg === images.length - 1 ? "move-dot" : ""}
        ></span>
      </div>
      <button
        className="slider-prev-btn"
        onClick={prevSlide}
        style={{ display: currentImg === 0 ? "none" : "" }}
      >
        <FaAngleLeft className="slider-icon" />
      </button>
      <button
        className="slider-nxt-btn"
        onClick={nextSlide}
        style={{ display: currentImg === images.length - 1 ? "none" : "" }}
      >
        <FaAngleRight className="slider-icon" />
      </button>
    </Wrapper>
  );
};

export default Slider;

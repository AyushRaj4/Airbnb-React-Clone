import React, { useRef } from "react";
import styled from "styled-components";
import "./Modal.css";
import { useGlobalContext } from "../../Context";
import Destinations from "./Destinations";
import { tabs } from "../../navData";
import TripDate from "./TripDate";
import Travellers from "./Travellers";
import ModalFooter from "./ModalFooter";
import ModalTop from "./ModalTop";

const Wrapper = styled.main`
  z-index: 1;

  .modal-section {
    width: 96.1vw;
    display: grid;
    flex-direction: column;
    row-gap: 0.75rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 470px) {
    .modal-section {
      width: 94.2vw;
    }
  }

  @media screen and (max-width: 400px) {
    .modal-section {
      max-width: 92.5vw;
    }
  }

  .stay-exp {
    /* position: sticky;
    left: 0px;
    top: 0px; */
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
    position: relative;
  }

  .cross-btn {
    border: 0.5px solid #b4b4b4;
    border-radius: 10rem;
    padding: 0.6rem;
    position: absolute;
    left: 0.5rem;
    top: -0.4rem;
    background-color: #f9f9f9;
  }

  .cross-btn:hover {
    background: #fbfbfb;
    border: none;
    box-shadow: 0px 0px 15px #c0c0c0;
  }

  .cross {
    font-size: 0.8rem;
    font-weight: bold;
  }

  .tab-btn {
    background: transparent;
    color: gray;
    border: none;
    font-size: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 2px solid transparent;
  }

  .destinations,
  .trip-date,
  .travellers {
    background: white;
    border-radius: 1.5rem;
    box-shadow: 0px 0.2rem 2rem #c6c6c6;
    padding: 1.51rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
    height: 61vh;
    overflow: hidden;
  }

  .open-dest {
    transition: all 0.5s;
    transform: scale(100%);
    width: 100vw;
    height: 98vh;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    overflow-y: auto;
    position: fixed;
    top: 0.95rem;
    /* margin-top: 0.5rem; */
    /* top: 50%; */
    top: 100%;
    left: 0%;
    transform: translate(0%, -100%);
    padding-top: 0;
  }

  .destinations::-webkit-scrollbar,
  .trip-date::-webkit-scrollbar,
  .travellers::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 730px) {
    .destinations {
      height: 55.3vh;
    }

    .open-dest {
      height: 97.5vh;
    }

    .trip-date {
      max-height: 78.1vh;
    }
  }

  @media (max-height: 665px) {
    .destinations {
      height: 54.7vh;
    }

    .open-dest {
      height: 98vh;
    }

    .trip-date {
      max-height: 73vh;
    }
  }

  @media (max-height: 650px) {
    .destinations {
      height: 49.3vh;
    }

    .open-dest {
      height: 90%;
    }

    .trip-date {
      max-height: 70.5vh;
    }

    footer .clear-btn {
      font-size: 0.8rem;
      padding: 0.6rem 0.65rem;
    }

    footer .clear-btn + button {
      font-size: 0.8rem;
      width: 6rem;
      padding: 0.5rem 0;
    }
  }

  @media (max-height: 630px) {
    .travellers .traveller span {
      font-size: 12px;
    }

    .travellers h2 {
      font-size: 16px;
    }

    .click-to-expand {
      /* height: 3.6rem; */
      height: 3rem;
      /* padding: 0; */
    }

    .footer {
      padding: 0.3rem 0.5rem;
    }
  }

  @media (max-height: 582px) {
    .destinations {
      height: 49.4vh;
    }

    .open-dest {
      height: 88.7%;
    }

    .trip-date {
      max-height: 75vh;
      /* 71.3 */
    }
  }

  .trip-date {
    height: 79.8vh;
  }

  .travellers {
    height: auto;
  }

  .destinations h2,
  .travellers h2 {
    font-weight: 700;
    letter-spacing: 0;
    color: #2a2a2a;
    font-size: 1.63rem;
    margin-bottom: 0.5rem;
  }

  .travellers h2 {
    font-size: 1.45rem;
  }

  .search-destination {
    position: relative;
    height: 3.45rem;
    border-radius: 0.5rem;
    border: 1px solid #9e9e9e;
    box-shadow: 0px 0px 1px #6b6b6b;
    /* outline: none; */
    width: 100%;
  }

  .search-destination::placeholder {
    padding-left: 3.1rem;
    font-size: 0.9rem;
  }

  .search-container {
    position: relative;
    display: flex;
    justify-content: center;
    /* margin-bottom: 0.5rem; */
  }

  .search-container.search-container-mod {
    /* background-color: white;
    width: 100vw;
    min-height: 10.5vh;
    margin-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 1;
    justify-content: center;
    align-items: center;
    box-shadow: var(--shadow-2); */
    background-color: white;
    width: 100vw;
    /* height: 11vh; */
    margin-left: -1.6rem;
    margin-right: -1.6rem;
    margin-bottom: 0;
    position: sticky;
    top: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
  }

  .apply-shadow {
    box-shadow: var(--shadow-2);
  }

  .search2 {
    width: 92.8vw;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
  }

  .search-icon {
    position: absolute;
    left: 17px;
    top: 1.07rem;
    font-size: 1.3rem;
  }

  .back-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    padding: 0.3rem;
    position: absolute;
    top: 2.08rem;
    left: 2.2rem;
    font-size: 1.3rem;
    background: transparent;
    border: none;
    border-radius: 10rem;
  }

  .back-btn:hover {
    background: #f0f0f0;
  }

  @media screen and (max-width: 470px) {
    .back-btn {
      top: 2.1rem;
      left: 2.4rem;
    }

    .search2 {
      width: 88.5vw;
    }
  }

  @media screen and (max-width: 370px) {
    .back-btn {
      top: 2.1rem;
      left: 2.2rem;
    }
  }

  .left-arrow {
    font-size: 1.1rem;
    color: #313131;
  }

  .recent-searches span,
  .suggested-destinations span {
    font-size: 0.76rem;
    display: block;
    margin-bottom: 0.4rem;
    color: #393939;
  }

  .suggested-destinations,
  .recent-searches {
    display: flex;
    flex-direction: column;
    /* row-gap: 0.1rem; */
    height: 100%;
    /* align-items: center; */
    /* overflow-y: scroll; */
  }

  .result-item {
    height: 4.5rem;
    width: calc(100% + 1.15rem);
    display: flex;
    column-gap: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.75rem;
    align-self: center;
  }

  .create-space {
    color: white;
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    .modal-section {
      width: 93.5vw;
    }
  }

  .result-item:hover {
    background: #d4d4d445;
  }

  .result-item img {
    width: 3.5rem;
    height: 100%;
  }

  .result-item div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.4rem;
  }

  .result-item h4 {
    font-size: 0.9rem;
  }

  .result-item h4 + h4 {
    color: #6b6b6b;
  }

  .more-arrow {
    width: 95.5%;
    margin: 0 auto;
    height: 2rem;
    display: flex;
    justify-content: center;
    border-top: 1px solid #e4e4e4;
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0%);
    cursor: pointer;
    background-color: #fffffff7;
  }

  @media screen and (max-width: 550px) {
    .more-arrow {
      width: 93.5%;
    }
  }

  @media screen and (max-width: 430px) {
    .back-btn {
      left: 2rem;
    }
  }

  @media screen and (max-width: 395px) {
    .more-arrow {
      width: 90.4%;
    }
    .back-btn {
      left: 1.9rem;
    }
  }

  .click-to-expand {
    /* height: 3.6rem; */
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 0 10px #dfdfdf;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.35rem;
    cursor: pointer;
  }

  @media (max-height: 630px) {
    .travellers h2 {
      font-size: 20px;
    }
  }

  .sp1 {
    color: #5d5d5d;
  }

  .click-to-expand span {
    font-size: 0.9rem;
  }

  footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    margin-top: 0.4rem;
    width: 100vw;
    /* height: 4rem; */
    background-color: white;
    border-top: 1px solid #eaeaea;
    padding: 0.6rem 1rem;
    padding-right: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clear-btn {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: 1.5px solid underline;
    padding: 1rem 0.65rem;
    border-radius: 0.5rem;
  }

  .clear-btn:hover {
    background-color: #f7f7f7;
  }

  .clear-btn + button {
    padding: 0.78rem 1.2rem;
    width: 7.9rem;
    padding-right: 1.5rem;
    background-color: #da215c;
    font-size: 1rem;
    color: white;
    border: transparent;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    /* height: 2.5rem; */
  }

  .search {
    font-size: 1.3rem;
  }

  .traveller {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.1rem;
    border-bottom: 1px solid #ebebeb;
  }

  .details {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .details span + span {
    color: #6a6a6a;
    font-size: 0.91rem;
  }

  .count-guests {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .plus,
  .minus {
    color: gray;
  }

  .count-btn {
    display: flex;
    background: transparent;
    border: 1px solid #b6b6b6;
    padding: 0.5rem;
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    cursor: pointer;
  }

  .count-btn:hover {
    border: 1px solid black;
  }

  .count-btn:hover .plus,
  .count-btn:hover .minus {
    color: #343434;
  }

  .stop-count {
    border: 1px solid #e8e8e8;
    cursor: not-allowed;
  }

  .stop-count:hover {
    border: 1px solid #e8e8e8;
  }

  .stop-count .minus,
  .stop-count .plus {
    color: #e8e8e8;
  }

  .stop-count:hover .minus,
  .stop-count:hover .plus {
    color: #e8e8e8;
  }

  .count-btn + span {
    // simply, text-align: center; will not work because the + sign appears after amount >= 16
    width: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Modal = () => {
  const { isModalOpen, currentTab } = useGlobalContext();

  return (
    <Wrapper
      className={isModalOpen ? "modal-container show-modal" : "modal-container"}
    >
      <section className="modal-section">
        <ModalTop tabs={tabs} />
        <Destinations currentTab={currentTab} />
        <TripDate />
        <Travellers />
      </section>
      <ModalFooter />
    </Wrapper>
  );
};

export default Modal;

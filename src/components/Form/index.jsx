import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebookSquare, FaGoogle, FaApple } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdDialpad } from "react-icons/md";
import { useGlobalContext } from "../../Context";
import { useState } from "react";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2.6rem 2rem;
  /* align-items: center; */

  h2 {
    font-size: 1.48rem;
    margin-bottom: 1.5rem;
  }

  select,
  input {
    padding: 1rem 0.7rem;
    border: 1px solid #b2b2b2;
    height: 3.5rem;
  }

  select {
    width: 100%;
    appearance: none;
    border-top-right-radius: 0.45rem;
    border-top-left-radius: 0.45rem;
    border-bottom: transparent;
    text-transform: capitalize;
  }

  .select-container {
    position: relative;
  }

  .down-arrow {
    position: absolute;
    top: 1.17rem;
    right: 1rem;
    font-size: 1.3rem;
    pointer-events: none;
  }

  input[type="text"] {
    border-bottom-right-radius: 0.45rem;
    border-bottom-left-radius: 0.45rem;
    margin-bottom: 0.5rem;
  }

  input[type="email"] {
    border-radius: 0.45rem;
    margin-bottom: 1rem;
  }

  input::placeholder {
    font-size: 1rem;
  }

  option {
    font-size: 1rem;
  }

  .privacy-policy {
    font-size: 0.75rem;
    letter-spacing: 0.025rem;
    margin-bottom: 1.2rem;
    line-height: 1.27;
  }

  .privacy-policy a {
    color: #303030;
    text-decoration: underline;
    font-weight: 600;
  }

  .privacy-policy a:hover {
    color: #191919;
  }

  .form-btn-1 {
    padding: 1rem 0;
    border-radius: 0.5rem;
    border: none;
    background: var(--btn-color-1);
    color: white;
    font-size: 1rem;
    margin-bottom: 1.6rem;
    box-sizing: border-box;
    max-height: 48px;
  }

  .form-btn-1-mod {
    margin-bottom: 2.7rem;
  }

  .border-div {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1.13rem;
  }

  .border-spans {
    height: 1px;
    width: 100%;
    border-bottom: 1px solid #d8d8d8;
  }

  .border-spans + span {
    font-size: 0.8rem;
  }

  .other-sign-ins {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .other-sign-ins button {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background: white;
    border-radius: 0.5rem;
    max-height: 47.6px;
    align-items: center;
    position: relative;
    font-weight: 600;
  }

  .other-sign-ins button:hover {
    background: #f5f5f5;
  }

  .form-icons {
    font-size: 1.2rem;
    position: absolute;
    left: 1.5rem;
  }

  .help-btn {
    font-size: 0.97rem;
    padding: 0.7rem 1rem;
    background: transparent;
    border: transparent;
    border-radius: 5rem;
    max-height: 42px;
    margin-bottom: 2.7rem;
    align-self: center;
  }

  .help-btn a {
    color: black;
    text-decoration: underline;
  }

  .help-btn:hover {
    background: #e9e9e96a;
  }
`;

const Form = ({ removeHelp }) => {
  // const [isEmail, setIsEmail] = useState(false);
  const { isEmail, setIsEmail } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [countryCode, setCountryCode] = useState("india(+91)");
  const { closeModal, isModalOpen2, likeIndex, toggleLike } =
    useGlobalContext();

  const handleModalSubmit = () => {
    closeModal(2);
    toggleLike(likeIndex);
    document.body.classList.remove("shadowed");
  };

  return (
    <>
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          setEmail("");
          setPhoneNum("");
          setIsEmail(false);
          if (isModalOpen2) handleModalSubmit();
        }}
      >
        <h2>Welcome to Airbnb</h2>
        {isEmail ? (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        ) : (
          <>
            <div className="select-container">
              <select
                name=""
                id=""
                aria-placeholder="Country/Region"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              >
                <option value="india">india(+91)</option>
                <option value="nepal">nepal</option>
                <option value="usa">usa</option>
                <option value="uk">uk</option>
                <option value="brazil">brazil</option>
              </select>
              <IoIosArrowDown className="down-arrow" />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              required
            />
            <span className="privacy-policy">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <a href="https://www.airbnb.co.in/terms/privacy_policy?source=signup">
                Privacy Policy
              </a>
            </span>
          </>
        )}
        <button
          type="submit"
          className={isEmail ? "form-btn-1 form-btn-1-mod" : "form-btn-1"}
        >
          Continue
        </button>
        <div className="border-div">
          <span className="border-spans"></span>
          <span>or</span>
          <span className="border-spans"></span>
        </div>
        <div className="other-sign-ins">
          <button>
            <FaFacebookSquare
              className="form-icons"
              style={{ color: "#007bff" }}
            />
            <span>Continue with Facebook</span>
          </button>
          <button>
            <FaGoogle className="form-icons" style={{ color: "red" }} />
            Continue with Google
          </button>
          <button>
            <FaApple className="form-icons" />
            Continue with Apple
          </button>
          <button onClick={() => setIsEmail(!isEmail)}>
            {isEmail ? (
              <>
                <MdDialpad className="form-icons" />
                Continue with Phone
              </>
            ) : (
              <>
                <CiMail className="form-icons" />
                Continue with Email
              </>
            )}
          </button>
        </div>
        {removeHelp || (
          <button className="help-btn">
            <a href="https://www.airbnb.co.in/help">Need help?</a>
          </button>
        )}
      </Wrapper>
    </>
  );
};

export default Form;

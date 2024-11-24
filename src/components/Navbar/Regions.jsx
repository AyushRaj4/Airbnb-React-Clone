import styled from "styled-components";
import { sea, me, uk, europe, thailand, world } from "../../exportImages";

const Wrapper = styled.article`
  position: absolute;
  top: 4.8rem;
  left: 0;
  background: white;
  padding: 1.7rem 1.3rem 1.2rem 1.3rem;
  border-radius: 2rem;
  z-index: 1;
  box-shadow: 0 2px 10px -1px #e0e0e0;

  h5 {
    font-weight: 600;
    margin-bottom: 1rem;
    margin-left: .8rem;
  }

  .regions {
    display: grid;
    /* column-gap: 1.2rem; */
    row-gap: .4rem;
    grid-template-columns: repeat(3, 1fr);
  }

  figure {
    display: flex;
    flex-direction: column;
    row-gap: .7rem;
    font-size: .8rem;
    border-radius: 0.8rem;
    padding: .7rem .7rem;
  }

  figure:hover {
    background: #e9e9e985;
  }

  img {
    width: 6.5rem;
    aspect-ratio: 1;
    border-radius: 0.8rem;
    border: 1px solid #c8c8c8;
  }
`;

const regions = [
  { name: "I'm flexible", img: world },
  { name: "Europe", img: europe },
  { name: "United Kingdom", img: uk },
  { name: "Southeast Asia", img: sea },
  { name: "Thailand", img: thailand },
  { name: "Middle East", img: me },
];

const Regions = () => {
  return (
    <Wrapper className="regions-container">
      <h5>Search by region</h5>
      <div className="regions">
        {regions.map((item) => {
          return (
            <figure>
              <img src={item.img} alt={item.name} />
              <figcaption>{item.name}</figcaption>
            </figure>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Regions;

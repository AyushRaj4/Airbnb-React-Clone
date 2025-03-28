import styled from "styled-components";
import { sea, me, uk, europe, thailand, world } from "../../exportImages";
import { nanoid } from "nanoid";

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
    margin-left: 0.8rem;
  }

  .regions {
    display: grid;
    /* column-gap: 1.2rem; */
    row-gap: 0.4rem;
    grid-template-columns: repeat(3, 1fr);
  }

  figure {
    display: flex;
    flex-direction: column;
    row-gap: 0.7rem;
    font-size: 0.8rem;
    border-radius: 0.8rem;
    padding: 0.7rem 0.7rem;
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
  { name: "I'm flexible", img: world, id: nanoid() },
  { name: "Europe", img: europe, id: nanoid() },
  { name: "United Kingdom", img: uk, id: nanoid() },
  { name: "Southeast Asia", img: sea, id: nanoid() },
  { name: "Thailand", img: thailand, id: nanoid() },
  { name: "Middle East", img: me, id: nanoid() },
];

const Regions = () => {
  return (
    <Wrapper className="regions-container">
      <h5>Search by region</h5>
      <div className="regions">
        {regions.map((item) => {
          return (
            <figure key={item.id}>
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

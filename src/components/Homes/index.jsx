import { SingleHome } from "..";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  row-gap: 2.8rem;

  @media screen and (min-width: 549px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1128px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Homes = ({ state, indexPage }) => {
  if (indexPage) {
    return (
      <>
        <Wrapper>
          {state?.demoHomes?.map((item, index) => {
            return (
              <SingleHome
                key={item.id}
                {...item}
                index={index}
                indexPage={true}
              />
            );
          })}
        </Wrapper>
        <div className="gap" style={{ height: "3.5rem" }}></div>
        <h1 style={{fontSize: "2.2rem", marginBottom: "1.7rem" }}>Past experiences</h1>
        <Wrapper>
          {state?.pastExperiences?.map((item, index) => {
            // if (index >= 1) return;
            return (
              <SingleHome
                key={item.id}
                {...item}
                index={index}
                indexPage={true}
              />
            );
          })}
        </Wrapper>
      </>
    );
  }

  return (
    <Wrapper>
      {state?.currentPage?.map((item, index) => {
        // console.log(item);
        return <SingleHome key={item.id} {...item} index={index} />;
      })}
    </Wrapper>
  );
};

export default Homes;

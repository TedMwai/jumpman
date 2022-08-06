import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  div {
    img {
      max-width: 100%;
    }
  }
`;
export const HeroInfo = styled.div`
  h1,
  p {
    font-size: 1.5rem;
  }
`;

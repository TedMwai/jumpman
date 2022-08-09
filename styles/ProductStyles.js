import styled from "styled-components";

export const ProductStyles = styled.div`
  height: 23rem;
  overflow: hidden;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0px 0px 5px rgba(0, 0, 0, 0.2);
  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease;
    }
  }
  h4 {
    font-size: 1rem;
    padding: 0rem 1rem;
    margin-top: 2rem;
    a {
      &:hover {
        transition: all 0.3s ease;
        border-bottom: 0.5px solid black;
      }
    }
  }
  p {
    padding: 0rem 1rem;
  }
`;

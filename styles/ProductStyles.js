import styled from "styled-components";

export const ProductStyles = styled.div`
  height: 23rem;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0px 0px 5px rgba(0, 0, 0, 0.2);
  img {
    height: 15rem;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    font-size: 1rem;
    padding: 0rem 1rem;
  }
  p{
    padding: 0rem 1rem;
  }
`;

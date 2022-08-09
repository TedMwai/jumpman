import styled from "styled-components";

const DetailsStyle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  /* flex-wrap: nowrap; */
`;
const ImageContainer = styled.div`
  flex-basis: 65%;
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
  max-width: 30%;
  margin-left: 2rem;
  div {
    h3,
    h4 {
      font-size: 1.5rem;
      padding: 0rem;
    }
    h4 {
      font-weight: lighter;
    }
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0rem;
  }
  p {
    font-size: 1rem;
  }
`;

const ProductSizes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  transition: all 0.75s ease-out;
  gap: 1rem;
  margin-bottom: 1rem;
  button {
    padding: 1rem 2rem;
    margin-bottom: 0.3rem;
    background: none;
    border: none;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    color: #585858;
    outline: 1px solid #585858;
    &:hover {
      background: #585858;
      color: white;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const BagBtn = styled.button`
  padding: 1rem;
  color: white;
  background: black;
  margin-bottom: 1rem;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #585858;
  }
`;

const FavouriteButton = styled.button`
  padding: 1rem;
  color: black;
  background: white;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  outline: 1px solid #585858;
  &:hover {
    outline: 1px solid black;
  }
`;

const SimilarContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 1.5rem;
  justify-content: space-between;
`;

const SimilarCard = styled.div`
  height: 27rem;
  margin-top: 3rem;
  min-width: 50vh;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0px 0px 5px rgba(0, 0, 0, 0.2);
  img {
    height: 20rem;
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

export {
  DetailsStyle,
  ImageContainer,
  ProductInfo,
  ProductSizes,
  Buttons,
  BagBtn,
  FavouriteButton,
  SimilarContainer,
  SimilarCard,
};

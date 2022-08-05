import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  max-height: 5vh;
  background: rgba(226, 226, 226, 0.267);
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  div {
    h1 {
      font-size: 2em;
    }
  }
`;
export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  a {
    font-size: 1.1rem;
  }
`;
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  div {
    a {
      margin: 0rem 0.8rem;
      font-size: 1rem;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  form {
    border-radius: 30px;
    border: 1px solid #f5f5f5;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: #f5f5f5;
    input {
      outline: none;
      border: none;
      background: #f5f5f5;
    }
    button {
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
`;
export const Count = styled.span`
  color: white;
  padding: 4px 7px;
  font-size: 10px;
  border-radius: 50px;
  background: black;
  position: relative;
  top: 10px;
  right: 20px;
`;

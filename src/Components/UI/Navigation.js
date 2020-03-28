import React from "react";
import styled from "styled-components";

const navigation = props => {
  return (
    <Container>
      <div className="nav">
        <a>Blogs</a>
        <a>Articles</a>
        <a>Motivations</a>
        <a>About</a>
      </div>
    </Container>
  );
};

export default navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 400;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  box-sizing: border-box;
  .nav {
    width: 50%;
    display: flex;
    background: linear-gradient(
      180deg,
      rgba(96, 179, 184, 0.88) 11.29%,
      #985de3 100%
    );
    padding: 5px;
    justify-content: space-around;
    border-radius: 10px;
    @media screen and (max-width: 728px) {
      width: 100%;
    }
    a {
      border-radius: 10px;
      color: white;
      text-align: center;
    }
  }
`;

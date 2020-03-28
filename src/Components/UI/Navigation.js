import React from "react";
import styled from "styled-components";

const navigation = () => {
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
      rgba(156, 85, 248, 0.88) 11.29%,
      #ed9999 100%
    );

    padding: 5px;
    display: flex;
    justify-content: space-around;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
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

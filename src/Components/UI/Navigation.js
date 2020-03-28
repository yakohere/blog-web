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
    justify-content: space-around;
    @media screen and (max-width: 728px) {
      width: 100%;
    }
    a {
      border-radius: 10px;
      background-color: #985de3;
      padding: 5px;
      color: white;
      width: 100px;
      text-align: center;
    }
  }
`;

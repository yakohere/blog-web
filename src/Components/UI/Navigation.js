import React from "react";
import styled from "styled-components";

const navigation = props => {
  return (
    <Container>
      <div className="nav">
        <a>BLOGS</a>
        <a>ARTICLES</a>
        <a>MOTIVATIONS</a>
        <a>ABOUT</a>
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
  font-family: "Baloo 2", cursive;
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
    }
  }
`;

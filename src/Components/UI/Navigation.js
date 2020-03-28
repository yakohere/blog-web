import React from "react";
import styled from "styled-components";

const navigation = props => {
  return (
    <Container>
      <ul>
        <li>BLOGS</li>
        <li>ARTICLES</li>
        <li>MOTIVATIONS</li>
        <li>ABOUT</li>
      </ul>
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
  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    @media screen and (max-width: 728px) {
      width: 100%;
    }

    li {
      font-size: 17px;
      color: black;
    }
  }
`;

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
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 400;
  font-family: "Baloo 2", cursive;
  background-color: rgba(0, 0, 0, 0.3);
  ul {
    width: 40%;
    display: flex;
    justify-content: space-around;
    list-style: none;

    li {
      font-size: 17px;
      color: white;
    }
  }
`;

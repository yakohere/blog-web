import React from "react";
import styled from "styled-components";
import Hero from "../../assets/hero.png";

const hero = () => {
  return (
    <Container>
      <div className="hero">
        <img src={Hero} />
      </div>
    </Container>
  );
};

export default hero;

const Container = styled.div`
  width: 100%;
  height: 300px;
  z-index: 100;

  .hero {
    width: 100%;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-left: 3px solid #60b3b8;
    border-bottom: 3px solid #60b3b8;
    border-right: 3px solid #60b3b8;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-sizing: border-box;
  }
`;

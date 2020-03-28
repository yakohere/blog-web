import React from "react";
import styled from "styled-components";

const motivation = props => {
  return (
    <Container>
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="txt">{props.txt}</div>
    </Container>
  );
};

export default motivation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 240px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  border: 1px solid #d3d3d3;
  @media screen and (max-width: 728px) {
      margin-bottom: 10px;
    }
  .img {
    width: 400px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .txt {
    font-weight: bold;
    font-size: 15px;
  }
`;

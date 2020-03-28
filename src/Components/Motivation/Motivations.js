import React, { Component } from "react";
import styled from "styled-components";
import motivationsData from "../../static/motivationData";
import Motivation from "./Motivation";

class Motivations extends Component {
  render() {
    return (
      <Container>
        <div className="motivations">
          {motivationsData.map(data => (
            <Motivation img={data.img} txt={data.txt} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Motivations;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  .motivations {
    width: 70%;
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 728px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

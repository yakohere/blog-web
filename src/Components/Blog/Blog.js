import React from "react";
import styled from "styled-components";

const blog = props => {
  return (
    <Container>
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="text">
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
      </div>
    </Container>
  );
};

export default blog;

const Container = styled.div`
  width: 250px;
  height: 250px;
  font-family: "Montserrat", sans-serif;
  margin-left: 50px;

  .img {
    width: 250px;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        transition: 0.3s ease;
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }
  .text {
    padding: 5px;
  }
  .title {
    text-align: right;
    font-size: 16px;
    font-weight: bold;
  }
  .date {
    font-size: 11px;
  }
`;

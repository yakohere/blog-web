import React from "react";
import styled from "styled-components";

const article = props => {
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

export default article;

const Container = styled.div`
  width: 100%;
  height: 200px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 20px;
  display: flex;
  overflow: hidden;
  border: 1px solid grey;
  .img {
    width: 300px;
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
      }
    }
  }
  .text {
    padding: 5px;
  }
  .title {
    text-align: right;
    font-size: 16px;
  }
  .date {
    font-size: 11px;
  }
`;

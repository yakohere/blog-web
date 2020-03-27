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
  width: 300px;
  height: 200px;
  background-color: #f3f3f3;
`;

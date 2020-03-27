import React, { Component } from "react";
import blogsData from "../../static/blogsData";
import Article from "../Article/Article";
import styled from "styled-components";

class Articles extends Component {
  render() {
    return (
      <Container>
        <a>
          <a className="letter-b">A</a>rticles
        </a>
        <div className="articles">
          {blogsData.map(data => (
            <Article img={data.img} title={data.title} date={data.date} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Articles;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .articles {
    width: 70%;
    display: flex;
    flex-direction: column;
  }

  a {
    align-self: center;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;

    .letter-b {
      font-size: 30px;
      color: #60b3b8;
      font-weight: bolder;
      text-decoration: underline;
    }
  }
`;

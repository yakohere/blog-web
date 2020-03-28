import React, { Component } from "react";
import articlesData from "../../static/articlesData";
import Article from "../Article/Article";
import styled from "styled-components";

class Articles extends Component {
  render() {
    return (
      <Container>
        <a>Articles</a>
        <div className="articles">
          {articlesData.map(data => (
            <Article
              img={data.img}
              title={data.title}
              date={data.date}
              article={data.article}
            />
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
    @media screen {
      width: 95%;
    }
  }

  a {
    align-self: center;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: white;
    padding: 5px;
    width: 50%;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(96, 179, 184, 0.88) 11.29%,
      #985de3 100%
    );
    margin-bottom: 10px;
    border-top-left-radius: 10px;

    border-top-right-radius: 10px;
  }
`;

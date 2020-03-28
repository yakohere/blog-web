import React from "react";
import styled from "styled-components";

const footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="notify">
          Subscribe our news letter.
          <input type="text" placeholder="Input your e-mail!" />
          <button type="submit">Submit</button>
        </div>
        <hr style={{ width: "100px" }} />
        <div className="quick-nav">
          <a>Blogs</a>
          <a>Articles</a>
          <a>Motivations</a>
          <a>About</a>
        </div>
      </div>
    </Container>
  );
};

export default footer;

const Container = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  padding: 20px;
  box-sizing: border-box;

  .footer {
    width: 40%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    @media screen and (max-width: 728px) {
      width: 100%;
      flex-direction: column;
    }
    box-sizing: border-box;

    align-items: center;
    .notify {
      width: 50%;
      color: #7b7b7b;
      font-size: 15px;

      box-sizing: border-box;
      @media screen and (max-width: 728px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      input {
        padding: 5px;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 5px;
        @media screen and (max-width: 728px) {
          margin-bottom: 5px;
        }
      }
      button {
        padding: 8px;
        width: 100px;
        align-self: center;
        color: white;
        border: transparent;
        border-radius: 5px;
        background: linear-gradient(
          90deg,
          rgba(137, 51, 248, 0.88) 0%,
          #f28181 92.41%
        );
        box-sizing: border-box;
      }
    }

    hr {
      @media screen and (max-width: 1928px) {
        display: none;
      }
      @media screen and (max-width: 728px) {
        display: flex;
      }
    }
    .quick-nav {
      width: 50%;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 728px) {
        width: 100%;
      }

      a {
        font-size: 15px;
        border-radius: 10px;
        color: #7b7b7b;
        text-align: center;
        margin-bottom: 5px;
      }
    }
  }
`;

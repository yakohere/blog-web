import React from "react";
import styled from "styled-components";
import Me from "../assets/me.png";

import Facebook from "../assets/social-media-logos/facebook.png";
import Gmail from "../assets/social-media-logos/gmail.jpg";
import LinkedIn from "../assets/social-media-logos/linkedin.png";

import BlogWeb from "../assets/blog-web.svg";
import BookWeb from "../assets/book-web.svg";

import Navigation from "./UI/Navigation";
import Footer from "./UI/Footer";

const about = () => {
  return (
    <Container>
      <Navigation />
      <div className="about">
        <div className="author-img">
          <img src={Me} />
        </div>
        Hello, My name is Yakhyo.
        <br />
        I am currently a second year computer science major at Sejong University
        in Seoul.
        <br />
        I really enjoy building web applications and designing user interfaces.
        I created this website using ReactJs and Styled Components. I reserched
        alot and uploaded very usefull books. Enjoy!!!
        <br />
        You can find more about me on this web site.
        <hr style={{ color: "grey", width: "50%" }} />
        My other projects.
        <br />
        <img style={{ width: "200px" }} src={BlogWeb} />
        My bloging web site
        <img style={{ width: "200px" }} src={BookWeb} />
        My book store
        <hr style={{ color: "grey", width: "50%" }} />
        <br />
        If you want to connect or contact me, the links are below.
        <br />
        <img style={{ width: "129px", height: "49px" }} src={Facebook} />
        <img style={{ width: "74px", height: "50px" }} src={Gmail} />
        <img style={{ width: "153px", height: "37px" }} src={LinkedIn} />
        <br />
        Thank you !
      </div>
      <Footer />
    </Container>
  );
};

export default about;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .about {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 728px) {
      width: 90%;
    }
    font-family: "Montserrat", sans-serif;
    .author-img {
      width: 50%;
      display: flex;
      justify-content: center;
      img {
        width: 50%;
        @media screen and (max-width: 728px) {
          width: 100%;
        }
      }
    }
  }
`;

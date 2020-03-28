import React, { Component } from "react";
import blogsData from "../../static/blogsData";
import Blog from "./Blog";
import styled from "styled-components";

class Blogs extends Component {
  render() {
    return (
      <Container>
        {blogsData.map(data => (
          <Blog img={data.img} title={data.title} date={data.date} />
        ))}
      </Container>
    );
  }
}

export default Blogs;

const Container = styled.div`
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  height: 300px;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
`;

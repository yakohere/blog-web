import React, { Component } from "react";
import blogsData from "../../static/blogsData";
import Blog from "./Blog";

class Blogs extends Component {
  render() {
    return (
      <div>
        {blogsData.map(data => (
          <Blog img={data.img} title={data.title} date={data.date} />
        ))}
      </div>
    );
  }
}

export default Blogs;

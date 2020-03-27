import React from "react";
import Blogs from "./Components/Blog/Blogs";
import Navigation from "./Components/UI/Navigation";
import Hero from "./Components/UI/Hero";
import Articles from "./Components/Article/Articles";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Blogs />
      <br />
      <Articles />
    </div>
  );
}

export default App;

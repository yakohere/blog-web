import React from "react";
import Blogs from "./Components/Blog/Blogs";
import Navigation from "./Components/UI/Navigation";
import Hero from "./Components/UI/Hero";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Blogs />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

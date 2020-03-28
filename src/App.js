import React from "react";
import Blogs from "./Components/Blog/Blogs";
import Navigation from "./Components/UI/Navigation";
import Articles from "./Components/Article/Articles";
import Motivations from "./Components/Motivation/Motivations";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Blogs />
      <Articles />
      <Motivations />
    </div>
  );
}

export default App;

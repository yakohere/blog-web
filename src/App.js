import React from "react";
import Blogs from "./Components/Blog/Blogs";
import Navigation from "./Components/UI/Navigation";
import Articles from "./Components/Article/Articles";
import Motivations from "./Components/Motivation/Motivations";
import Footer from "./Components/UI/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Blogs />
      <Articles />
      <Motivations />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Router, Link } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import FetchedPosts from "./components/FetchedPosts";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <hr />
        <Route exact path="/" component={FetchedPosts} />
        <Route path="/:postId" component={Post} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
};

export default App;

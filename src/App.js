import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import FetchedPosts from "./components/FetchedPosts";
import About from "./components/About";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <hr />
        <Switch>
          <Route exact path="/" component={FetchedPosts} />
          <Route path="/post/:postId" component={Post} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Post from "./components/Post";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import Mainpage from "./components/Mainpage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:postId" component={Post} />
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

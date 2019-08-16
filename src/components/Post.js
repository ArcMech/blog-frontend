import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    id: this.props.match.params.postId,
    post: "Hello"
  };
  componentWillMount() {
    const id = this.props.match.params.postId;
    const fetchPost = async id => {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/posts/" + this.state.id
      );
      this.setState({ post: res.data });
    };
    fetchPost();
  }

  render() {
    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.overview}</p>
      </div>
    );
  }
}

export default Post;

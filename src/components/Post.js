import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/post.module.css";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  state = {
    id: this.props.match.params.postId,
    post: "There is such no post to view :("
  };
  componentDidMount() {
    const fetchPost = async () => {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/posts/" + this.state.id
      );
      console.log(res);
      this.setState({ post: res.data });
    };
    fetchPost();
  }

  render() {
    return (
      <div className={styles.box}>
        <div className={styles.cover}>
          <img src={this.state.post.post_cover} alt="Kawaboonga" />
          <div className={styles.intro}>
            <h1 className={styles.title}>{this.state.post.title}</h1>
            <p className={styles.overview}>{this.state.post.overview}</p>
          </div>
        </div>
        <div className={styles.post}>
          <ReactMarkdown source={this.state.post.content} />
        </div>
      </div>
    );
  }
}

export default Post;

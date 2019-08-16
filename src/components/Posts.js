import React from "react";
import { Link, Router, Route } from "react-router-dom";
import styles from "../styles/post.module.css";
import Button from "../components/Button";
import ReactMarkdown from "react-markdown";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className={styles.center}>Loading...</h2>;
  }
  return (
    <div className={styles.box}>
      {posts.map(post => (
        <div className={styles.item} key={post.id}>
          <div className={styles.item_image} />
          <div className={styles.item_text}>
            <p className={styles.small}>{post.timestamp}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.overview}>
              <ReactMarkdown source={post.overview} />
            </div>

            <Link to={"/" + post.id}>
              <Button>Read more</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

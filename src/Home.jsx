import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";

export function Home() {
  const [posts, setPosts] = useState([]);

  let handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostNew />
      <PostIndex posts={posts} />
    </div>
  );
}

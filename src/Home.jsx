import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostIndex } from "./PostIndex";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleCreatePost = (params) => {
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        setPosts([...posts, response.data]); // posts.push(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  let handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PostNew onCreatePost={handleCreatePost} errors={errors} />
      <PostIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <p>{currentPost.body}</p>
      </Modal>
    </div>
  );
}

import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Waffles", thought: "Waffles are better than pancakes" },
    { title: "React", thought: "React is cool" },
    { title: "Chris", thought: "Chris likes hats" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deleteAPost = (index: number): void => {
    setPosts((prev) => {
      const copy: Post[] = prev.slice(0);
      copy.splice(index, 1);
      return copy;
    });
  };

  const addAPost = (post: Post): void => {
    setPosts((prev) => {
      const copy: Post[] = prev.slice(0);
      copy.unshift(post);
      return copy;
    });
  };

  return (
    <div className="SocialPosts">
      <button onClick={() => setShowForm(true)}>New Thought</button>
      {showForm && (
        <div className="form-container" onClick={() => setShowForm(false)}>
          <PostForm onAdd={addAPost} onSetShowForm={setShowForm} />
        </div>
      )}
      <ul>
        {posts.map((item, index) => (
          <PostInList post={item} onDelete={() => deleteAPost(index)} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;

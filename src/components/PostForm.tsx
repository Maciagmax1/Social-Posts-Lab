import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
  onSetShowForm: (showForm: boolean) => void;
}

const PostForm = ({ onAdd, onSetShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ title, thought });
    setTitle("");
    setThought("");
    onSetShowForm(false);
  };
  return (
    <form
      className="PostForm"
      onSubmit={(e) => handleSubmit(e)}
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor="title">Title</label>
      <input
        required
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <textarea
        required
        name="thought"
        id="thought"
        cols={30}
        rows={10}
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      ></textarea>
      <button>Add</button>
    </form>
  );
};

export default PostForm;

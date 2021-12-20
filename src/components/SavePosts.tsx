import React, { useState } from "react";
import apis from "../api";
import { PostPayload } from "../interface/PostPayload";
import { useNavigate } from "react-router-dom";

const SavePosts = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload: PostPayload = {
      title: title,
      author: author,
      content: content,
    };
    const asyncHandleSubmit = async () => {
      try {
        await apis.createPost(payload);
      } catch (err) {
        console.log("Error saving the post");
      }
    };

    asyncHandleSubmit();
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Register Post</h1>

      <div className="col-md-12">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="title">
                {" "}
                <b>Title</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">
                {" "}
                <b>Author</b>{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">
                {" "}
                <b>Description</b>{" "}
              </label>
              <textarea
                className="form-control"
                id="content"
                placeholder="Enter description"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </form>
          <a href="/" role="button" className="btn btn-secondary">
            Cancel
          </a>
          <button
            type="button"
            className="btn btn-primary"
            id="btn-save"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavePosts;

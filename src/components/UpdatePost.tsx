import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apis from "../api";
import { GetPost } from "../interface/GetPost";

/**
 * Page for editing post
 */
const dummyObject: GetPost = {
  id: -1,
  author: "",
  content: "",
  modifiedDate: "",
  title: "",
};

const UpdatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<GetPost>(dummyObject);
  const { id } = useParams();
  useEffect(() => {
    const asyncGetPosts = async () => {
      const postsData = await apis.getPostById(id || "");
      setPost(postsData.data);
    };
    asyncGetPosts();
  }, []);

  const handlePostUpdate = () => {
    const asyncUpdatePost = async () => {
      try {
        await apis.updatePost(post);
      } catch (err) {
        console.log(err);
        console.log("Error Updating Post to Server");
      }
    };

    asyncUpdatePost();
    navigate("/");
  };

  const handlePostDelete = () => {
    const asyncDeletePost = async () => {
      try {
        await apis.deletePost(id || "");
      } catch (err) {
        console.log("Error deleting post");
      }
    };
    asyncDeletePost();
    navigate("/");
  };

  const handleFormDataUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Update Posts</h1>

      <div className="col-md-12">
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="title">Post Number</label>
              <input
                type="text"
                className="form-control"
                id="id"
                value={post.id}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                defaultValue={post.title}
                onChange={handleFormDataUpdate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                value={post.author}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                defaultValue={post.content}
                onChange={handleFormDataUpdate}
              />
            </div>
          </form>
          <a href="/" role="button" className="btn btn-secondary">
            Cancel
          </a>
          <button
            type="button"
            className="btn btn-primary"
            id="btn-update"
            onClick={handlePostUpdate}
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-danger"
            id="btn-delete"
            onClick={handlePostDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;

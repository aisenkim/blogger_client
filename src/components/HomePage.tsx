import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../api";
import AuthContext from "../auth";
import { GetPosts } from "../interface/GetPosts";
import DataTable from "./DataTable";

const HomePage = (): JSX.Element => {
  const [posts, setPosts] = useState<GetPosts["post"]>([]);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const asyncGetPosts = async () => {
    if (!auth.loggedIn) return;
    const postsData = await apis.getPosts();
    setPosts(postsData.data);
  };

  useEffect(() => {
    asyncGetPosts();
  }, []);

  const BASE_URL = "http://localhost:8080/api/v1";

  const handleLogout = () => {
    auth.logout();
    setPosts([]);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const loggedInSection = (
    <>
      <a href="/posts/save" role="button">
        Register Post
      </a>
      <button onClick={handleLogout}>Logout</button>
    </>
  );

  return (
    <div>
      <h1>Starting with web service</h1>
      {auth.loggedIn ? (
        loggedInSection
      ) : (
        <button onClick={handleLogin}>Login</button>
        // <a href={BASE_URL + "/oauth2/authorization/google"} role="button">
        //   Google Login
        // </a>
      )}
      <DataTable post={posts} />
    </div>
  );
};

export default HomePage;

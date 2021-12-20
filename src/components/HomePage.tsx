import React, { useEffect, useState } from "react";
import apis from "../api";
import { GetPosts } from "../interface/GetPosts";
import DataTable from "./DataTable";

const HomePage = (): JSX.Element => {
  const [posts, setPosts] = useState<GetPosts["post"]>([]);

  useEffect(() => {
    const asyncGetPosts = async () => {
      const postsData = await apis.getPosts();
      setPosts(postsData.data);
    };
    asyncGetPosts();
  }, []);

  return (
    <div>
      <h1>Starting with web service</h1>
      <a href="/posts/save" role="button">
        Register Post
      </a>
      <DataTable post={posts} />
    </div>
  );
};

export default HomePage;

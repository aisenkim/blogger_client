import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SavePosts from "./components/SavePosts";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/save" element={<SavePosts />} />
        <Route path="/posts/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

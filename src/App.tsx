import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./auth";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SavePosts from "./components/SavePosts";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts/save" element={<SavePosts />} />
          <Route path="/posts/:id" element={<UpdatePost />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

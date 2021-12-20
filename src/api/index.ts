import axios, { AxiosResponse } from "axios";
import { GetPost } from "../interface/GetPost";
import { GetPosts } from "../interface/GetPosts";
import { PostPayload } from "../interface/PostPayload";
import { UpdatePost } from "../interface/UpdatePost";

// axios.defaults.withCredentials = true;
const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const createPost = (payload: PostPayload) => api.post(`/posts`, payload);
export const getPosts = () => api.get(`/posts`);
export const getPostById = (id: string) => api.get(`/posts/${id}`);
export const updatePost = (payload: GetPost) =>
  api.put(`/posts/${payload.id}`, payload);
// export const createTop5List = (payload) => api.post(`/top5list/`, payload);
// export const getAllTop5Lists = () => api.get(`/top5lists/`);
// export const getTop5ListPairs = (toolMenu, sortMenu) =>
//   api.get(`/top5listpairs?toolMenu=${toolMenu}&sortMenu=${sortMenu}`);
// export const updateTop5ListById = (id, payload) =>
//   api.put(`/top5list/${id}`, payload);
// export const deleteTop5ListById = (id) => api.delete(`/top5list/${id}`);
// export const getTop5ListById = (id) => api.get(`/top5list/${id}`);
// export const getTop5ListByTitle = (title, userId) =>
//   api.get(`/top5list/title?listTitle=${title}&userId=${userId}`);

// export const getLoggedIn = () => api.get(`/loggedIn/`);
// export const registerUser = (payload) => api.post(`/register/`, payload);
// export const loginUser = (payload) => api.post(`/login/`, payload);
// export const logoutUser = () => api.get(`/logout/`);

const apis = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  // createTop5List,
  // getAllTop5Lists,
  // getTop5ListPairs,
  // updateTop5ListById,
  // deleteTop5ListById,
  // getTop5ListById,
  // getTop5ListByTitle,

  // getLoggedIn,
  // registerUser,
  // loginUser,
  // logoutUser,
};

export default apis;

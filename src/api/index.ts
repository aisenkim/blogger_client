import axios from "axios";
import { GetPost } from "../interface/GetPost";
import { Login } from "../interface/Login";
import { PostPayload } from "../interface/PostPayload";

// GETTING TOKEN FROM LOCAL STORAGE
// FIND A MORE SECURE WAY
const storageToken =
  localStorage.getItem("accessToken") == null
    ? ""
    : localStorage.getItem("accessToken")!;

axios.defaults.headers.common["Authorization"] = storageToken;
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const getHeader = () => {
  const token = localStorage.getItem("accessToken");
  if (token === null) return;
  return { headers: { Authorization: token } };
};

export const createPost = (payload: PostPayload) =>
  api.post(`/api/v1/posts`, payload);
export const getPosts = () => {
  const header = getHeader();
  return api.get(`api/v1/posts`, header);
};
export const getPostById = (id: string) => api.get(`/api/v1/posts/${id}`);
export const updatePost = (payload: GetPost) =>
  api.put(`/api/v1/posts/${payload.id}`, payload);
export const deletePost = (id: string) => api.delete(`/api/v1/posts/${id}`);

export const getLoggedIn = () => {
  const header = getHeader();
  return api.get(`/api/v1/user`, header);
};
// export const login = (payload: Login) =>
//   api.post(`/login`, { username: "admin", password: "admin" });
export const login = (payload: Login) => api.post(`/login`, payload);
// .then((response) => {
//   const accessToken = response.headers.authorization;
//   localStorage.setItem("accessToken", accessToken);
// })
// .catch((err) => {
//   console.log("Error logging in: ", err);
// });
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
  deletePost,
  getLoggedIn,
  login,
};

export default apis;

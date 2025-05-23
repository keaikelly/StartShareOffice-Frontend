import axios from "axios";
import { request } from "../utils/request";

// api 기본 주소 (env로 숨김)
const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
export default api;

// blog GET 요청
export const getBlogData = (blogId) =>
  request(api, "get", `/api/blogs/naver?blogId=${blogId}`);

// 공지 GET 요청
export const getNoticeData = () => request(api, "get", `/api/notices`);

//공지 POST 요청
export const setNoticeData = (title, content) =>
  request(api, "post", `/api/notices`, { title: title, content: content });

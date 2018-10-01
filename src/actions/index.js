import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
const ROOT_URL = " 	http://reduxblog.herokuapp.com/api/";
// NOT REAL API KEY
const API_KEY = "?key=RIZ12345";
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

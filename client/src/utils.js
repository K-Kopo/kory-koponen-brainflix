import axios from "axios";
export const url = "http://localhost:8080/";

const options = { year: "numeric", month: "numeric", day: "numeric" };

export function dateConvert (date) {new Date(Number(date)).toLocaleString(
  "en-US",
  options
)}

export const apiRequests = {
  getAll: () => axios.get(`${url}videos`),
  getDetails: (id) => axios.get(`${url}videos/${id}`),
};

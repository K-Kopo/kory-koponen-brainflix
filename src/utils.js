import axios from "axios";
export const url = "https://project-2-api.herokuapp.com/";
export const api_key = "8c87e374-2f7e-4584-ae0c-ddd8fb0526e0";

const options = { year: "numeric", month: "numeric", day: "numeric" };

export function dateConvert (date) {new Date(Number(date)).toLocaleString(
  "en-US",
  options
)}

export const apiRequests = {
  getAll: () => axios.get(`${url}videos?api_key=${api_key}`),
  getDetails: (id) => axios.get(`${url}videos/${id}?api_key=${api_key}`),
};

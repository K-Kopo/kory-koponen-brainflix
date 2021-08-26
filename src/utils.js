import  axios from  'axios';
export const url = "https://project-2-api.herokuapp.com/";
export const api_key = "8c87e374-2f7e-4584-ae0c-ddd8fb0526e0";



export const apiRequests = {
    getAll: () => axios.get(`${url}videos?api_key=${api_key}`),
    getSingle: id => axios.get(`${url}videos/${id}`),
    postComment: (comment) => axios.post(`${url}`, comment),
    deleteComment: id => axios.delete(`${url}/${id}`),
    editComment: (id, comment) => axios.put(`${url}/${id}`, comment)
}
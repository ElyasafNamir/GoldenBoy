import axios from "axios";

//when using mongodbcompass
//mongodb+srv://nogaaram1:eFVxkK6F1htzxjiV@cluster.ptkjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

// When using phone
// const axiosConfig = {
//   baseURL: "http://172.20.10.8:3000/",
//   url: "http://172.20.10.8:3000/",
// };

// When using PC (postman, web, etc)
const axiosConfig = {
  baseURL: "http://192.168.1.35:3000/",
  url: "http://192.168.1.35:3000/",
};

const AxiosInstance = axios.create(axiosConfig);

export default AxiosInstance;

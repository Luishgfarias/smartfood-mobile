import axios from "axios";

export const Api = axios.create({
    baseURL: "https://smart-food-back.vercel.app/"
})
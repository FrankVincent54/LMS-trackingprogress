import axios from "axios";
import { COURSE_URL } from "../course-constants/course-url";

/** @type {import('axios').AxiosStatic} */
// const axiosClient = axios;

export const courseClient = axios.create({
    baseURL:COURSE_URL,
    headers:{
    "Content-Type": "application/json",
    "Accept": "*",
    "Access-Control-Allow-Origin": "*",
    "Origin": "*"
    }
})
import axios from "axios";
import { instructor_Url } from "./instructorUrl";


export const instructorCLIENT = axios.create({
    baseURL:instructor_Url,
    headers:{
    "Content-Type": "application/json",
    "Accept": "*",
    // "Access-Control-Allow-Origin": "*",
    // "Origin": "*"
    }
})
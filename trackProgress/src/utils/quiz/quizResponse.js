import axios from "axios";
import { quiz_Url } from "./quizUrl";


export const quizCLIENT = axios.create({
    baseURL: quiz_Url,
    headers:{
    "Content-Type": "application/json",
    "Accept": "*",
    "Access-Control-Allow-Origin": "*",
    // "Origin": "*"
    }
})
import axios from "axios";
import { student_url } from "./studentUrl";


export  const studentCLIENT = axios.create({
    baseURL:student_url,
    headers: {
    "Content-Type": "application/json",
    "Accept": "*",
    "Access-Control-Allow-Origin": "*",
    "Origin": "*"
    }
})
import {axios} from "axios";
import { Admin_Base_Url, Courses_Base_Url, Enrollments_Base_Url, Student_Base_Url, Teacher_Base_Url } from "./appconstant";


export const adminCLIENT = axios.create({
    baseURL: Admin_Base_Url,
    headers: {
        "Content-Type":"application/json",
        "Accept":"*",
        "Access-Control-Allow-Origin":"*",
        "Origin":"*"
    }
});


export const studentCLIENT = axios.create({
    baseURL: Student_Base_Url,
    headers: {
        "Content-Type":"application/json",
        "Accept":"*",
        "Access-Control-Allow-Origin":"*",
        "Origin":"*"
    }
});


export const teacherCLIENT = axios.create({
    baseURL: Teacher_Base_Url,
    headers: {
        "Content-Type":"application/json",
        "Accept":"*",
        "Access-Control-Allow-Origin":"*",
        "Origin":"*"
    }
});


export const coursesCLIENT = axios.create({
    baseURL: Courses_Base_Url,
    headers: {
        "Content-Type":"application/json",
        "Accept":"*",
        "Access-Control-Allow-Origin":"*",
        "Origin":"*"
    }
});
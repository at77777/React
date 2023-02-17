import {baseURL} from "../api/endpoints";
import axios from "axios";

export const axiosRequest = axios.create({baseURL})
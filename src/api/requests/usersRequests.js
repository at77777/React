import {axiosRequest} from "../../utils/axiosConfig";
import {requestEndpoints} from "../endpoints";

export const usersRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.users)
}
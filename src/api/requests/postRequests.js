import {axiosRequest} from "../../utils/axiosConfig";
import {requestEndpoints} from "../endpoints";

export const postsRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.posts)
}
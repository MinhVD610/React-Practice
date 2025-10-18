import axios from "./customize-axios";

const fetchAllUser = (page, pageSize) => {
    return axios.get(`/api/Products/pagination?Page=${page}&PageSize=${pageSize}`);
}

export { fetchAllUser };
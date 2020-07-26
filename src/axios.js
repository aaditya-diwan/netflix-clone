import axios from "axios";

/**
 * BASE url to make requests to the movie datbase 
 */
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export default instance;
import axios from 'axios'

const baseUrl='http://localhost:3003'

const ApiCaller = axios.create({baseURL: baseUrl});

export default ApiCaller;


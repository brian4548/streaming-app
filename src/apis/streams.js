import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:3001/',
    baseURL: "https://streaming-api-api.herokuapp.com/"

})
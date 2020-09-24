
import axios from "axios"

const http = axios.create({
    baseUrl:('http://jsonplaceholder.typicode.com/posts')
});


export default {
    postar: () => {  http.get(`http://jsonplaceholder.typicode.com/posts?userId=1`)
console.log(http)
}
} 


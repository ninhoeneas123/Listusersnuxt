import axios from "axios"

export const http = axios.create({
   baseUrl:'http://jsonplaceholder.typicode.com/users'
});

/*(`http://jsonplaceholder.typicode.com/posts?userId=${id}`); */
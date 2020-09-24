import { http } from './config'

export default {
    listar: () =>   http.get('http://jsonplaceholder.typicode.com/users') 
} 


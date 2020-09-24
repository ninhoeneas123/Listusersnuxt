import axios from "axios"


export default class Api {

     static async Post(id){
        const response  = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
       console.log(response.data)
        return response.data
    }
}

